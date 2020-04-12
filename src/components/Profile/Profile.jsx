import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({profile, status, updateStatusThunk}) => {

if (!profile) {
  return <Preloader />
}

  return (
    <div>
      
      <ProfileInfo status={status} updateStatusThunk={updateStatusThunk} profile={profile}/>
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
