import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import styles from './Profile.module.css'
const Profile = ({status, updateStatusThunk, isOwner, profile,savePhoto, saveProfile, ...props}) => {
if (!profile) {
  return <Preloader />
}

  return (
    <div className={styles.profilePage}>
      
      <ProfileInfo saveProfile={saveProfile} savePhoto={savePhoto} isOwner={isOwner} status={status} updateStatusThunk={updateStatusThunk} profile={profile}/>
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
