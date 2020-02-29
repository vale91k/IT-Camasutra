import React from "react";
import s from "./TextArea.module.css";
import {addMessageActionCreator,  updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer"  


const TextArea = props => {
  
  let newMessageElement = React.createRef();
  

  let addMessage = () => {
    props.sendMessage()
  };

  let onMessageChange = () => {
    let body = newMessageElement.current.value;
    // body = message tipa
    props.updateNewMessageBody(body);
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
