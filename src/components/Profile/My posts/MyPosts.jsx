import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import { reduxForm } from 'redux-form';

const ReduxPostForm = reduxForm({form: 'profilePostForm'})(PostForm);


const MyPosts = props => {
  
  let postsElements = props.posts.map(p => (
    <Post
      id={p.id}
      message={p.message}
      avatar={p.avatar}
      likeCount={p.likeCount}
    />
  ));

 


  const onSubmit = (newPostMessage) => {
    props.addPost(newPostMessage.newPostMessage)
   
    }
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div className={s.redux_form}>
        <ReduxPostForm onSubmit={onSubmit}/>
       </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
