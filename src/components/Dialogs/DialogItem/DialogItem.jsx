import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css"



const DialogItem = ({name, id, avatar}) => {
  
  let path = "/dialogs/" + id;

  return (
    <div className={styles.dialogs}>
      <NavLink className={styles.dialog} activeClassName={styles.active} to={path}><img src={avatar}   />
      <div className={styles.dialogName}>{name}</div>
        
      </NavLink>
    </div>
  );
};


export default DialogItem;
