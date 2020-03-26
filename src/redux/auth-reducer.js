import {  authAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      {
            return {
              ...state, ...action.data, isAuth:true
            }
      }
      case TOGGLE_IS_FETCHING: {
      
   
        return { ...state, isFetching: action.isFetching };
      }
  
    default:
return state
  }
}

export const setAuthUserData = (id, email, login) => { return {type: SET_USER_DATA, data: {id, email, login}}}

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const loginThunk = () => {
  return (dispatch) => {

    authAPI.me().then(Response => {
      if (Response.data.resultCode === 0) {
        let {id, login, email} = Response.data.data;
        dispatch(setAuthUserData(id, login, email))
      }
    }
    )
  }
}
      
    
      
    


export default authReducer;