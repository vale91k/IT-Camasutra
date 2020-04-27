import React from "react";
import styles from "./UserInfoBar.module.css";

const UserInfoBar = ({ username, status }) => {
  return (
    
    <div className={styles.barArea}>
            <div className={styles.fullName}>
              {username}
            </div>
            {status && (
           <div className={styles.status}>
              {status}
            </div>
           )}
    </div>
         
           
         
  );
};
export default UserInfoBar;
