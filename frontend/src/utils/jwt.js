import jwtDecode from "jwt-decode";
import { verify, sign } from "jsonwebtoken";
import axios from "../services/axios";

const isValidToken = (accessToken) => {
  if (!accessToken) {
    console.log("no hay token")
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  var timeToExpire = decoded.exp * 60 
  return timeToExpire > currentTime;
};

//  const handleTokenExpired = (exp) => {
//   let expiredTimer;

//   window.clearTimeout(expiredTimer);
//   const currentTime = Date.now();
//   const timeLeft = exp * 1000 - currentTime;
//   console.log(timeLeft);
//   expiredTimer = window.setTimeout(() => {
//     console.log('expired');
//   }, timeLeft);
// };

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `jwt ${accessToken}`;
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken);
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common.Authorization;
  }
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
}

export { verify, sign, isValidToken, setSession, setUser };
