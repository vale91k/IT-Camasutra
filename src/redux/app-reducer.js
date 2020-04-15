import { loginThunk } from "./auth-reducer";
const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return { type: SET_INITIALIZED_SUCCESS };
};

export const initializeApp = () => async(dispatch) => {
  let promise = await dispatch(loginThunk());
  
   dispatch(initializedSuccess());
};

export default appReducer;
