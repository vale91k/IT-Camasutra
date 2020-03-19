import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = props => {
  
  
  let postsElements = props.posts.map(p => (
    <Post
      id={p.id}
      message={p.message}
      avatar={p.avatar}
      likeCount={p.likeCount}
    />
  ));

  let onAddPost = () => {
   
    props.addPost()
  };

  let onPostChange = (e) => {
  let text = e.target.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
          <button>Remove Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
