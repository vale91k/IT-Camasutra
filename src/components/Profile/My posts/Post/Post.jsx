import React from "react";
import styles from "./Post.module.css";

const Post = props => {
  return (
    <div className={styles.item}>
      <div className={styles.ava_message}>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt="https://kittentoob.com/wp-content/uploads/2018/04/British-Shorthair-1-750x419.jpg"
      />
      {props.message}


      </div>
<div className={styles.like_count}>

      <img
        className={styles.likes}
        src="https://www.stickees.com/files/animals/cat-meow/641-cat-yarn-sticker.png"
        alt="https://pngimg.com/uploads/like/like_PNG29.png"
      />
      <div className={styles.likesCount}>
      {props.likeCount}
        </div>

</div>
    </div>
  );
};
export default Post;
