import React from "react";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { reduxForm, Field } from 'redux-form';
import {compose} from 'redux'
import {connect} from 'react-redux'
import {LoginPageThunk} from './../../redux/auth-reducer'
import { Element } from "../common/FormsControls/FormsControls";
import { required, email } from "../../utils/validators/validators";



const Input = Element('input')
const LoginForm = props => {
    return (
      <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Login'} name={'login'} component={Input} validate={[required, email]}/></div>
      <div><Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/></div>
      <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/></div>
      <div><button>Login</button></div>
  </form>
    );
  };


  const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);



  export const Login = props => {
    const onSubmit = (formData) => {
    
      console.log('hehe')
        let {login, password, rememberMe = false} = formData
        props.LoginPageThunk(login, password, rememberMe)
       
    }
    
    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    );
  };

const MapStateToPorps = (state) => {
    {

    }
}
  

export default  connect(MapStateToPorps, {LoginPageThunk})(Login)