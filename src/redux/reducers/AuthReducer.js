import {
    USER_REGISTER_BEGIN,
    USER_REGISTER_FAILURE,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_BEGIN,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    LOGOUT
  } from "../Actions/actionConsts";
  const user = JSON.parse(localStorage.getItem("user"))

  const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case  USER_REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case USER_REGISTER_FAILURE:
        return {
          ...state,
          isLoggedIn: false,
        };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }