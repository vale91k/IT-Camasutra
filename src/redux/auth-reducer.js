import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const TOGGLE_IS_FETCHING = "social-network/auth/TOGGLE_IS_FETCHING";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
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

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => {
  return { type: SET_USER_DATA, data: { id, email, login, isAuth } };
};

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const loginThunk = () =>  async(dispatch) => {
  let response =  await  authAPI.me()
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }

   
  };
  


export const LoginPageThunk = (email, password, rememberMe) => {
  return async(dispatch) => {
   let loginResponse= await authAPI.login(email, password, rememberMe)
      if (loginResponse.data.resultCode === 0) {
        let authResponse = await authAPI.me()
        
          if (authResponse.data.resultCode === 0) {
            let { id, email, login } = authResponse.data.data;
            dispatch(setAuthUserData(id, email, login, true));
          }
     
      } else {
        let message =
        loginResponse.data.messages.length > 0
            ? loginResponse.data.messages[0]
            : "Some Error";
        dispatch(stopSubmit("login", { _error: message }));
      }
   
  };
};

export const Logout = () => {
  return (dispatch) => {
    authAPI.logout();
    let id = null;
    let email = null;
    let login = null;
    let isAuth = false;
    dispatch(setAuthUserData(id, email, login, isAuth));
  };
};

export default authReducer;
