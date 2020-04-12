import React from "react";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { LoginPageThunk } from "./../../redux/auth-reducer";
import { Element, createField } from "../common/FormsControls/FormsControls";
import { required, email } from "../../utils/validators/validators";
import { Redirect } from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

const Input = Element("input");
const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("login", Input, [required, email], {
        type: "email",
        placeholder: "Please enter your email there",
      })}
      {createField("password", Input, [required], {
        type: "password",
        placeholder: "Please enter your Password there",
      })}
      {createField("rememberMe", "input", null, { type: "checkbox" })}

      {error && <div className={styles.formSummartError}>{error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export const Login = ({ LoginPageThunk, isAuth }) => {
  const onSubmit = (formData) => {
    console.log(formData);
    let { login, password, rememberMe = false } = formData;
    LoginPageThunk(login, password, rememberMe);
  };
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const MapStateToPorps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(MapStateToPorps, { LoginPageThunk })(Login);
