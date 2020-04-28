import React from "react";
import styles from "./User.module.css";
import Avatar from "./Avatar/Avatar";
import SubscribeButton from "./SubscribeButton/SubscribeButton";
import UserInfoBar from "./UserInfoBar/UserInfoBar";


const User = ({
  id,
  smallPhoto,
  followed,
  username,
  status,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div key={id} className={styles.userBar} >
      <div className={styles.leftPart}>
        <Avatar
          id={id}
          smallPhoto={smallPhoto}
        />
        <SubscribeButton
          followed={followed}
          followingInProgress={followingInProgress}
          id={id}
          unfollow={unfollow}
          follow={follow}
        />
      </div>
      <div className={styles.rightPart}>
        <UserInfoBar
          username={username}
          status={status}
        />
      </div>
    </div>
  );
};

export default User;
