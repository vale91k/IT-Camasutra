import React from 'react'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { Redirect } from "react-router-dom";


const Login = (props) => {
    return <h1>Login</h1>
}

export default withAuthRedirect( Login)