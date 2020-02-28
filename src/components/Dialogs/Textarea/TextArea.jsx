import React from "react";
import s from "./TextArea.module.css";
import {addMessageActionCreator,  updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer"  


const TextArea = props => {

  let newMessageElement = React.createRef();
  

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
    props.dispatch(updateNewMessageTextActionCreator(''))
  };

  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(message);
    props.dispatch(action);
  };

  return (
    <div className={s.textarea}>
      <textarea
        onChange={onMessageChange}
        ref={newMessageElement}
        value={props.newMessageText}
      ></textarea>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
};

export default TextArea;
