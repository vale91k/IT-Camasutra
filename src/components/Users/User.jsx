import React from "react";
import styles from "./User.module.css";

import Avatar from "./Avatar/Avatar";
import SubscribeButton from "./SubscribeButton/SubscribeButton";
import UserInfoBar from "./UserInfoBar/UserInfoBar";
let User = ({
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
    <div key={id} className={styles.userBar}>
      <span className={styles.leftPart}>
        <Avatar id={id} smallPhoto={smallPhoto} />
        <SubscribeButton
          followed={followed}
          followingInProgress={followingInProgress}
          id={id}
          unfollow={unfollow}
          follow={follow}
        />
      </span>

      <UserInfoBar username={username} status={status} />
    </div>
  );
};

export default User;
