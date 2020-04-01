import React from "react";
import s from "./TextArea.module.css";
import { Field } from "redux-form";

const TextArea = props => {
 



  return (
    <form className={s.textarea} onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"tyt"}
          name={"newMessageBody"}
          component={"textarea"}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default TextArea;
