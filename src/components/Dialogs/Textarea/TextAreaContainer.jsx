import React from "react";
import s from "./TextArea.module.css";
import {addMessageActionCreator,  updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer"  
import TextArea from "./TextArea";


const TextAreaContainer = props => {

let state = props.store.getState().dialogsPage;

  let newMessageElement = React.createRef();
  

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
    props.store.dispatch(updateNewMessageTextActionCreator(''))
  };

  let onMessageChange = (body) => {
    
    let action = updateNewMessageTextActionCreator(body);
    props.store.dispatch(action);
  };

  return (
    <TextArea dialogsPage={state} updateNewMessageBody={onMessageChange} sendMessage={addMessage}/>
  );
};

export default TextAreaContainer;
