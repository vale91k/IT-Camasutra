import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import TextArea from "./Textarea/TextArea";

const Dialogs = props => {
  let kek = 3;
  let dialogsElements = props.dialogsPage.dialogs.map(d => (
    

    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} id={m.id}/>
  ));

  return (
    <div className={s.dialogs}>
      
      <div className={s.dialogsItems}>{dialogsElements}</div>
      
      <div className={s.messages}>{messagesElements}</div>
      <TextArea dispatch={props.dispatch} newMessageText={props.dialogsPage.newMessageText}/>
      
    </div>
  );
};
export default Dialogs;
