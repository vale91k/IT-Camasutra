import React from "react";
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogTextArea from "./DialogTextArea/DialogTextArea";
import { reduxForm } from 'redux-form';





const DialogTextForm = reduxForm({form: 'login'})(DialogTextArea);

const Dialogs = props => {

 const [rId] = React.useState(nanoid)

  let dialogsElements = props.state.dialogs.map(d => (
    <DialogItem key={rId} name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = props.state.messages.map(m => (
    <Message key={rId} message={m.message} id={m.id} />
  ));

const onSubmit =(www) => {
  console.log(www.newMessageBody)
  props.addMessage(www.newMessageBody)
}


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
      
      <DialogTextForm onSubmit={onSubmit} addMessage={props.addMessage} onMessageChange={props.onMessageChange} newMessageText={props.state.newMessageText}/>
    </div>
  );
};


export default Dialogs;
