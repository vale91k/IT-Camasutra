import { profileAPI } from "./../api/api";
import { stopSubmit } from "redux-form";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_ISFETCHING = "TOOGGLE_ISFETCHING";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    {
      id: 1,
      message: "It's my first post!",
      likeCount: 12,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/e/e9/British_shorthair_%E2%80%A2_%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%285295667021%29.jpg",
    },
    {
      id: 2,
      message: "Congratulations!",
      likeCount: 3,
      avatar:
        "https://kittentoob.com/wp-content/uploads/2018/04/British-Shorthair-1-750x419.jpg",
    },
  ],

  profile: null,
  isFetching: false,
  status: "",
  test: "",
  userId: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostMessage,
        avatar:
          "https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg",
        likeCount: 1488,
      };
      return { ...state, posts: [...state.posts, newPost] };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_ISFETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case "TEST": {
      return { ...state, test: action.test };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    default:
      return state;
  }
};
export const setStatus = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const testAC = (test) => ({ type: "TEST", test });
export const addPostActionCreator = (newPostMessage) => ({
  type: ADD_POST,
  newPostMessage,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const toogleIsFetching = (isFetching) => ({
  type: TOGGLE_ISFETCHING,
  isFetching,
});

export const setUsersPageThunk = (userId) => {
  return async (dispatch) => {
    dispatch(toogleIsFetching(true));
    let response = await profileAPI.setUserPageApi(userId);

    dispatch(toogleIsFetching(false));
    dispatch(setUserProfile(response.data));
  };
};

export const getStatusThunk = (id = 2) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(id);
    dispatch(setStatus(response.data));
  };
};

export const updateStatusThunk = (status) => {
 
  return async (dispatch) => {
    try {
      let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
    } catch(error) {
      console.log(error)
      debugger
    }
    
  };
};
export const savePhoto = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhotoApi(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};

export const saveProfile = (formData) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id;

    let response = await profileAPI.saveProfileApi(formData);
    if (response.data.resultCode === 0) {
      let response = await profileAPI.setUserPageApi(userId);
 dispatch(setUserProfile(response.data))
    } else  {
      let message =
      response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error";
      dispatch(stopSubmit("edit-profile-form", {_error: message}));
      
      return Promise.reject(message)
    }
  };
};
export default profileReducer;
