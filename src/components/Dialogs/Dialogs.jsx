import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import TextArea from "./Textarea/TextArea";
import TextAreaContainer from "./Textarea/TextAreaContainer";

const Dialogs = props => {

 let state = props.store.getState()
  let dialogsElements = state.dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = state.dialogsPage.messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
      <TextAreaContainer
        store={props.store}
      />
    </div>
  );
};
export default Dialogs;
