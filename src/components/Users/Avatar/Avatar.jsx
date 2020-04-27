import React from "react";
import styles from "./Avatar.module.css";
import userPhoto from "../../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";


const Avatar = ({ smallPhoto, id }) => {
  return (
    <div className={styles.avatarArea}>
      <NavLink to={"/profile/" + id}>
        <div className={styles.avatar}>

          <img

            src={smallPhoto ? smallPhoto : userPhoto}
          /> </div>
      </NavLink>


    </div>
  );
};
export default Avatar;
