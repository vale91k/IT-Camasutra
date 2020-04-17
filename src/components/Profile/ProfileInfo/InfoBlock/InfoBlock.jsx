import React from "react";
import styles from "./InfoBlock.module.css";
import Preloader from "../../../common/Preloader/Preloader";

const InfoBlock = ({ profile, isOwner, setEditMode }) => {
  const {
    lookingForAJob,
    fullName,
    contacts,
    aboutMe,
    lookingForAJobDescription,
  } = profile;
  const { github, vk, website } = contacts;

  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={() => setEditMode(true)}>EDIT</button>
        </div>
      )}
      <div>
        <b>Name:</b> {fullName}
      </div>
      <div>
        <div>
          <b>Looking For a Job:</b>
          {lookingForAJob ? lookingForAJob && lookingForAJobDescription : "net"}
        </div>
      </div>

      {aboutMe && (
        <div>
          <b>About me:</b> {aboutMe}
        </div>
      )}
      <div>
        <b>Contacts:</b>
        {Object.keys(contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle} :</b> {contactValue}
    </div>
  );
};
export default InfoBlock;
