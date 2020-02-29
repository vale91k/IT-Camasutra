const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = 
  {
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
    newPostText: ""
  }


const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        avatar:
          "https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg",
        likeCount: 1488
      };
      state.posts.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
      default: return state;
  }
  
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export default profileReducer;
