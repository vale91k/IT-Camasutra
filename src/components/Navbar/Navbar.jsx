import React from "react";
import s from './Navbar.module.css' ;
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import store from "../../redux/store"

const Navbar = (props) => {
  return (
    <div className={s.fullPart}>
      <div className={s.navbarPart}>

    <nav className={s.nav}>
      <div className={`${s.item}`} >
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/test" activeClassName={s.activeLink}>Test</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
    </nav>
      </div>
    <div className={s.sidebarPart}>

<SideBar  sidebar={store.getState().sidebar}/>
  

    
    </div>
    <div className={s.otherPart}>
      
    </div>
    </div>
  );
};
export default Navbar;
