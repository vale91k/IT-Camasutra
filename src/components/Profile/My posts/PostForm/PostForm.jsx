import React from "react";
import { Field } from 'redux-form';
import { maxLength, required} from '../../../../utils/validators/validators'
import { Element } from "../../../common/FormsControls/FormsControls";


const TextArea = Element('textarea')
const maxLength10 = maxLength(10)
const PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
    
      <div>
        <Field
          placeholder={"Text there..."}
          name={"newPostMessage"}
          component={TextArea}
          
          validate={[  maxLength10, required  ]}
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