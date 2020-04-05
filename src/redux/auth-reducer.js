import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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

export const loginThunk = () =>  (dispatch) => {
   return  authAPI.me().then((Response) => {
      if (Response.data.resultCode === 0) {
        let { id, email, login } = Response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
   
  };
  


export const LoginPageThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        authAPI.me().then((response) => {
          if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
          }
        });
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some Error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
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
