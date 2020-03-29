import React from "react";
import styles from './ProfileInfo.module.css' ;
import userPhoto from '../../../assets/images/user.jpg'
import ProfileStatus from "./Status/ProfileStatus";


const ProfileInfo = (props) => {

  return (
    <div className={styles.content}>
<div className={styles.topPicture}>
<img 
        src='https://i.pinimg.com/originals/dc/ce/b1/dcceb1644c13f70559ab0fbce2f03d22.jpg'
        alt="/"
      />
</div>
     
      <div className={styles.discription}>
        <div className={styles.avatar}>
        {props.profile.photos.small !== null ? <img src={props.profile.photos.small} /> : <img src={userPhoto} />}

        </div>
      <ProfileStatus profile={props.profile} status={'zdarova my driends'}/>
        </div>
    
      </div>
  );
};
export default ProfileInfo;
