import React from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./Status/ProfileStatusWithHooks";




const ProfileInfo = ({profile, isOwner, status, updateStatusThunk, savePhoto,  ...props}) => {

  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]) {
      savePhoto(e.target.files[0])
    }
   }

  return (
    <div className={styles.content}>
      <div className={styles.topPicture}>
        <img
          src="https://i.pinimg.com/originals/dc/ce/b1/dcceb1644c13f70559ab0fbce2f03d22.jpg"
          alt="/"
        />
      </div>

      <div className={styles.discription}>
        <div className={styles.avatar}>
          {<img src={profile.photos.small || userPhoto} />}
          {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        </div>
        <ProfileStatusWithHooks
          status={status}
          updateStatusThunk={updateStatusThunk}
          profile={profile}
        />
      </div>
    </div>
  );
};
export default ProfileInfo;
