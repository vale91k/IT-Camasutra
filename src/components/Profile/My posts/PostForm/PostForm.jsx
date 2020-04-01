import React from "react";
import { Field } from 'redux-form';

const PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Text there..."}
          name={" "}
          component={"textarea"}
        />
      </div>

      <div>
        <button>Add Post</button>
      </div>
      <div>
        
        <button>Remove Post</button>
      </div>
    </form>
  );
};

export default PostForm