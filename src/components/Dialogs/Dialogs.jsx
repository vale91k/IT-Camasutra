import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import TextArea from "./Textarea/TextArea";







const Dialogs = props => {

 

  let dialogsElements = props.state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = props.state.messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));
// tyt dl9 text area

 


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
      {/* a tyt text area */}
      <TextArea addMessage={props.addMessage} onMessageChange={props.onMessageChange} newMessageText={props.state.newMessageText}/>
    </div>
  );
};


export default Dialogs;
