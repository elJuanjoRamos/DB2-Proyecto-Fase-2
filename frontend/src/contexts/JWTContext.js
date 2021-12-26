import { createContext, useEffect, useReducer } from "react";
import axios from "../services/axios";
import { isValidToken, setSession, setUser } from "../utils/jwt";
import { signUpService, signInService } from "../services/auth.service"
import { useNavigate } from "react-router-dom";


const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const SIGN_UP = "SIGN_UP";

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
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          var user = JSON.parse(localStorage.getItem("user"))
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
              user: null,
              token: null
            },
          });
          //navigate('/')
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


  const signIn = async (email, password) => {

    var response = await signInService({
      email,
      password,
    }, "http://localhost:8000/business/user-auth/")

    console.log(response)


    const getError = (array) => {
      var msg = ""
      array.forEach(err => {
        msg += err + '\n'
      });
      return msg
    }
    try {
      const { token, user } = response;
      setSession(token);
      setUser(user)
      dispatch({
        type: SIGN_IN,
        payload: {
          user,
          token
        },
      });
      return { status: 200, message: response.message }
    }catch(error) {
      
      var msg = ""
      if (response.hasOwnProperty('non_field_errors')) {
        msg += getError(response.non_field_errors)
      }

      return { message: msg, status: 400 }

    }

    
  };

  const signOut = async () => {
    setSession(null);
    dispatch({ type: SIGN_OUT });
  };



  const signUp = async (formData) => {

    dispatch({
      type: SIGN_UP,
      payload: {
        formData,
      },
    });

    var result = await signUpService(formData, "http://localhost:8000/business/user/")

    console.log(result)
    return result

    /*const getError = (array) => {
      var msg = ""
      array.forEach(err => {
        msg += err + '\n'
      });
      return msg
    }
    if (result.status === 201) {
      return result
    }
    else {
      var msg = ""

      if (result.hasOwnProperty('email')) {
        msg += getError(result.email)
      }
      if (result.hasOwnProperty('first_name')) {
        msg += getError(result.first_name)
      }

      return { message: msg, status: result.status }
    }*/
  };



  const resetPassword = (email) => console.log(email);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        signIn,
        signOut,
        signUp,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
