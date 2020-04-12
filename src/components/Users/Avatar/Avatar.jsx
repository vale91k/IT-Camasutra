import React from "react";
import styles from "./Avatar.module.css";
import userPhoto from "../../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";


const Avatar = ({smallPhoto, id}) => {
  return (
    <div>
      <NavLink to={"/profile/" + id}>
        <img
          className={styles.avatar}
          src={smallPhoto ? smallPhoto : userPhoto}
        />
      </NavLink>
    </div>
  );
};
export default Avatar;
