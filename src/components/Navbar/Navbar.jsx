import React from "react";
import styles from './Navbar.module.css' ;
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import store from "../../redux/store"

const Navbar = (props) => {
  return (
    <div className={styles.fullPart}>
      <div className={styles.navbarPart}>

    <nav className={styles.nav}>
      <div className={`${styles.item}`} >
        <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/test" activeClassName={styles.activeLink}>Test</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
      </div>
    </nav>
      </div>
    <div className={styles.sidebarPart}>

    <SideBar  sidebar={store.getState().sidebar}/>
    </div>
    
    </div>
  );
};
export default Navbar;
