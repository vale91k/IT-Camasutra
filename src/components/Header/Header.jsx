import React from "react";
import style from './Header.module.css' ;
import { NavLink } from "react-router-dom";
import Login from "../Login/Login";

const Header = (props) => {
  
return (
    <header className={style.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"/>
        <div className={style.login_block}>
        {/* {props.isAuth ?  props.login : <Login />} */}
         {  props.login || 'login please'}
         <button onClick={props.Logout}>Logout</button>
        </div>
      </header>
);
}
export default Header;