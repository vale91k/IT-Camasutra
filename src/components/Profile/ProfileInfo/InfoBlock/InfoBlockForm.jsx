import React from "react";
import { reduxForm } from "redux-form";
import styles from "../../../common/FormsControls/FormsControls.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import { required, email, url } from "redux-form-validators";
import {
  createField,
  Element,
} from "../../../common/FormsControls/FormsControls";
import { maxLength } from "../../../../utils/validators/validators";

const Input = Element("input");

const InfoBlockForm = ({
  profile,
  isOwner,
  setEditMode,
  handleSubmit,
  initialValues,
  error,
}) => {
  
  const {
    lookingForAJob,
    fullName,
    contacts,
    aboutMe,
    lookingForAJobDescription,
  } = profile;
  

  return (
    <form onSubmit={handleSubmit}>
      {isOwner && (
        <div>
          <button>SAVE</button>
        </div>
      )}
      {error && <div className={styles.formSummartError}>{error}</div>}

      <div>
        <b>Name:</b>
        {createField("fullName", Input, [], {})}
      </div>

      <div>
        <b>Looking For a Job:</b>{" "}
        {createField("lookingForAJob", Input, [], { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills:</b>{" "}
        {createField("lookingForAJobDescription", Input, [required()], {})}
      </div>

      <div>
        <b>About me:</b> {createField("aboutMe", Input, [required()], {})}
      </div>

      <div>
        <b>Contacts:</b>

        {Object.keys(contacts).map((key) => {
          return (
            <div key={key} className={styles.contact}>
              <b>{key}:</b>
              {createField("contacts."+key , Input, [], { placeholder: key })}
            </div>
          );
        })}
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "edit-profile-form" })(InfoBlockForm);

export default LoginReduxForm;
