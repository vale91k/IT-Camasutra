import React from "react";
import s from "./DialogTextArea.module.css";
import { Field } from "redux-form";
import { Element } from "../../common/FormsControls/FormsControls";
import { required, maxLength } from "../../../utils/validators/validators";

const TextArea = Element('textarea')
const maxLength100 = maxLength(100);
const DialogTextArea = props => {
 



  return (
    <form className={s.textarea} onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"tyt"}
          name={"newMessageBody"}
          validate={[required, maxLength100]}
          component={TextArea}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default DialogTextArea;
