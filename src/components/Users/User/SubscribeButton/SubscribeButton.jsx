import React from "react";
import styles from './SubscribeButton.module.css'


const SubscribeButton = ({
  followed,
  followingInProgress,
  id,
  unfollow,
  follow
}) => {
  return (
    <div className={styles.subscribeBtn}>

      {followed ? (
        <button
          className={styles.unfollowBtn}
          disabled={followingInProgress.some((userId) => userId === id)}
          onClick={() => {
            unfollow(id);
          }}
        >
          Unfollow
        </button>
      ) : (<button
        className={styles.followBtn}
        disabled={followingInProgress.some((userId) => userId === id)}
        onClick={() => {
          follow(id);
        }}
      >
        Follow
      </button>
        )}
    </div>
  )
}

export default SubscribeButton;
