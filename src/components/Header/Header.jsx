import React from "react";
import style from './Header.module.css' ;
import { NavLink, Redirect } from "react-router-dom";

const Header = (props) => {

  const LogoutClick = () => {
    props.Logout()
  return  <Redirect to={'/login'} />
  }
  const LoginClick =() => {
    return (<Redirect to={'/login'} />)
  }
return (
    <header className={style.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"/>
        <div className={style.login_block}>
        {props.isAuth ?
          (<div> 
            {props.login}
            
            <button onClick={LogoutClick}>Logout</button>
            </div>) : (
            <div>
Please <NavLink to="/login" >Login</NavLink>
            </div>)} 
        </div>
      </header>
);
}
export default Header;