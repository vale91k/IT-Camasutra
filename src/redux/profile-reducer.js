const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_ISFETCHING = "TOOGGLE_ISFETCHING";

let initialState = {
  posts: [
    {
      id: 1,
      message: "It's my first post!",
      likeCount: 12,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/e/e9/British_shorthair_%E2%80%A2_%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%285295667021%29.jpg"
    },
    {
      id: 2,
      message: "Congratulations!",
      likeCount: 3,
      avatar:
        "https://kittentoob.com/wp-content/uploads/2018/04/British-Shorthair-1-750x419.jpg"
    }
  ],
  newPostText: "",
  profile: null,
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        avatar:
          "https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg",
        likeCount: 1488
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_ISFETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile});
export const toogleIsFetching = isFetching => ({
  type: TOGGLE_ISFETCHING,
  isFetching
});

export default profileReducer;
