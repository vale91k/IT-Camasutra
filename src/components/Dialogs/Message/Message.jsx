import React from "react";
import s from "./Message.module.css";

const Message = props => {
 

  return props.id % 2 ?
   <div className={s.rightMessage}>{props.message}</div>
    : 
   <div className={s.leftMessage}>{props.message}</div>
};


export default Message;
