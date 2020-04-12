import React from "react";
import styles from "./UserInfoBar.module.css";

const UserInfoBar = ({ username, status }) => {
  return (
    <span className={styles.rightBar}>
      <span className={styles.leftSideBar}>
        <div className={styles.fullName}>{username}</div>
        <div className={styles.status}>{status}</div>
      </span>
      <span className={styles.rightsideBar}>
        <div className={styles.city}>mgn</div>
        <div className={styles.country}>russia</div>
      </span>
    </span>
  );
};
export default UserInfoBar;
