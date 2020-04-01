
import {
  addPostActionCreator
  
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return {
  posts: state.profilePage,
  newPostText: state.profilePage.newPostText, 
  posts: state.profilePage.posts
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    
    addPost: (newPostMessage) => {
      dispatch(addPostActionCreator(newPostMessage));
         
    }

  }
}

  let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
