import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";


const INITIALIZE = "INITIALIZE";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case "SIGN_IN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "SIGN_OUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const initialize = async () => {
      try {
        const user1 = localStorage.getItem("user")
        if (user1) {
          const user = JSON.parse(user1)
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          console.log("no es valido")
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null
            },
          });
          navigate('/')
        }
      } catch (err) {
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };
    initialize();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
