import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";

const MyPosts = props => {
  let newPostElement = React.createRef();
  let postsElements = props.posts.map(p => (
    <Post
      id={p.id}
      message={p.message}
      avatar={p.avatar}
      likeCount={p.likeCount}
    />
  ));

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewPostTextActionCreator(""));
    //  rerenderEntireTree()
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
          <button>Remove Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
