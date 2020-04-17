import React from "react";
import { reduxForm } from "redux-form";
import styles from "./InfoBlock.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import {
  createField,
  Element,
} from "../../../common/FormsControls/FormsControls";
import { maxLength } from "../../../../utils/validators/validators";



const InfoBlockForm = ({ profile, isOwner, setEditMode, handleSubmit }) => {
  const Input = Element("input");
  const {
    lookingForAJob,
    fullName,
    contacts,
    aboutMe,
    lookingForAJobDescription,
  } = profile;
  const { github, vk, website } = contacts;
  

  return (
    <form onSubmit={handleSubmit}>
      {isOwner && (
        <div>
          <button>SAVE</button>
        </div>
      )}
      <div>
        <b>Name:</b> 
        {createField("fullName", Input, maxLength(100), {placeholder: fullName || 'Enter your name'} )}
      </div>

      <div>
        <b>Looking For a Job:</b>{" "}
        {createField("lookingForAJob", Input, [], { type: "checkbox" })}
      </div>
 <div><b>My professional skills:</b>  {createField("lookingForAJobDiscription", Input, [], {  placeholder: lookingForAJobDescription || 'My professional skills'})}</div>
      
        <div>
          <b>About me:</b>  {createField("aboutMe", Input, [], {placeholder: aboutMe || 'About Me'})}
        </div>
      
      {/* <div>
        <b>Contacts:</b>{" "}
        {Object.keys(contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={contacts[key]}
            />
          );
        })}
      </div> */}
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "inf" })(InfoBlockForm);

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle} :</b> {contactValue}
    </div>
  );
};
export default LoginReduxForm;
