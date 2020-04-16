import React, {useState} from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./Status/ProfileStatusWithHooks";
import InfoBlock from './InfoBlock/InfoBlock'
import EditModeInfoBlock from './InfoBlock/EditModeInfoBlock'



const ProfileInfo = ({profile, isOwner, status, updateStatusThunk, savePhoto,  ...props}) => {
  
const [editMode, setEditMode] = useState(false)


  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]) {
      savePhoto(e.target.files[0])
    }
   }

  return (
    <div className={styles.content}>
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
      
      {editMode ? <EditModeInfoBlock isOwner={isOwner} setEditMode={setEditMode} profile={profile}/> : <InfoBlock profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>
      }
      
    </div>
  );
};
export default ProfileInfo;
