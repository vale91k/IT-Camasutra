import React from "react";
import s from './ProfileInfo.module.css' ;



const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <img
        src="https://i.pinimg.com/originals/dc/ce/b1/dcceb1644c13f70559ab0fbce2f03d22.jpg"
        alt="https://i1.ytimg.com/vi/SN3xlcjbvUo/maxresdefault.jpg"
      />
      <div className={s.discription}>
        Ava + description
        </div>
    
      </div>
  );
};
export default ProfileInfo;
