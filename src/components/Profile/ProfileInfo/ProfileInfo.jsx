import React from "react";
import styles from './ProfileInfo.module.css' ;
import userPhoto from '../../../assets/images/user.jpg'
import ProfileStatusWithHooks from "./Status/ProfileStatusWithHooks";


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
      <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk} profile={props.profile} />
        </div>
    
      </div>
  );
};
export default ProfileInfo;
