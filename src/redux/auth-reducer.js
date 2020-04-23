import { authAPI, sequrityApi } from "../api/api";
import { stopSubmit } from "redux-form";
import { Redirect } from "react-router-dom";
import React from "react";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const TOGGLE_IS_FETCHING = "social-network/auth/TOGGLE_IS_FETCHING";
const GET_CAPTCHA_SUCCESS = "social-network/auth/GET_CAPTCHA_SUCCESS";



let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case GET_CAPTCHA_SUCCESS: {
      return {...state, captchaUrl: action.captchaUrl}
    }
    default:
      return state;
  }
};
export const takeCaptchaUrl = (captchaUrl) => {return { type: GET_CAPTCHA_SUCCESS, captchaUrl} }

export const setAuthUserData = (id, email, login, isAuth) => {
  return { type: SET_USER_DATA, data: { id, email, login, isAuth } };
};

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const loginThunk = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  } 
};

export const getCaptchaUrlThunk = () => async (dispatch) => {
  const response = await sequrityApi.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(takeCaptchaUrl(captchaUrl));
};

export const LoginPageThunk = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    let loginResponse = await authAPI.login(email, password, rememberMe,captcha);
    if (loginResponse.data.resultCode === 0) {

      let authResponse = await authAPI.me();

      if (authResponse.data.resultCode === 0) {
        let { id, email, login } = authResponse.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }


      } else {
        if (loginResponse.data.resultCode === 10) {
          dispatch(getCaptchaUrlThunk())
        }
      let message =
      loginResponse.data.messages.length > 0
        ? loginResponse.data.messages[0]
        : "Some Error";
        
    dispatch(stopSubmit("login", { _error: message }));
      
      
     }  
      
    
  
      
    
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout();
    let id = null;
    let email = null;
    let login = null;
    let isAuth = false;
    dispatch(setAuthUserData(id, email, login, isAuth));
    if (isAuth) {
      return <Redirect to={"/login"} />;
    }
  };
};

export default authReducer;
