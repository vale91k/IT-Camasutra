import React from "react";
import s from "./TextArea.module.css";
 


const TextArea = props => {
 
  
  let addMessage = () => {
    props.addMessage()
  }

  let onMessageChange = (text) => {
    let message = text.target.value;
    props.onMessageChange(message);
  }
  let newMessageElement = React.createRef();

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
