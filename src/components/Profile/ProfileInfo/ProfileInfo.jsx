import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./Status/ProfileStatusWithHooks";
import InfoBlock from "./InfoBlock/InfoBlock";
import InfoBlockForm from "./InfoBlock/InfoBlockForm";

const ProfileInfo = ({
  profile,
  isOwner,
  status,
  updateStatusThunk,
  savePhoto,
  saveProfile,
  ...props
}) => {
  const [editMode, setEditMode] = useState(false);
  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    
    saveProfile(formData).then(() => {
      
      setEditMode(false);
    });
  };
  return (
    <div className={styles.content}>
      <div className={styles.discription}>
        <div className={styles.avatar}>
          {<img src={profile.photos.small || userPhoto} />}
          {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        </div>
        <ProfileStatusWithHooks
          status={status}
          updateStatusThunk={updateStatusThunk}
          profile={profile}
        />
      </div>

      {editMode ? (
        <InfoBlockForm
          initialValues={profile}
          onSubmit={onSubmit}
          isOwner={isOwner}
          setEditMode={setEditMode}
          profile={profile}
        />
      ) : (
        <InfoBlock
          profile={profile}
          isOwner={isOwner}
          setEditMode={setEditMode}
        />
      )}
    </div>
  );
};
export default ProfileInfo;
