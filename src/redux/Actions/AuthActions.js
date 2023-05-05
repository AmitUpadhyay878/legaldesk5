import {
    USER_REGISTER_BEGIN,
    USER_REGISTER_FAILURE,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_BEGIN,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
  } from "./actionConsts";
  
  export const userRegisterRequest = () => ({
    type: USER_REGISTER_BEGIN,
  });
  
  export const userRegisterSuccess = (payload) => ({
    type: USER_REGISTER_SUCCESS,
    payload,
  });
  
  export const userRegisterFailure = (payload) => ({
    type: USER_REGISTER_FAILURE,
    payload,
  });
  
  export const userLoginRequest = () => ({
    type: USER_LOGIN_BEGIN,
  });
  
  export const userLoginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload,
  });
  
  export const userLoginFailure = (payload) => ({
    type: USER_LOGIN_FAILURE,
    payload,
  });
  
 