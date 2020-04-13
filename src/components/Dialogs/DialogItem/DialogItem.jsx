import React from "react";
import { NavLink } from "react-router-dom";
import ss from "./DialogItem.module.css"
const DialogItem = props => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={ss.dialogs}>
      <NavLink className={ss.dialog} activeClassName={ss.active} to={path}><img src={props.avatar}   />
      <div className={ss.dialogName}>{props.name}</div>
        
      </NavLink>
    </div>
  );
};


export default DialogItem;
