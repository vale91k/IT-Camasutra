import React from 'react';
import logo from '../../../assets/images/logo/test.png';
import logoAlt from '../../../assets/images/logo/logo_alt.png';
import { Redirect, NavLink } from 'react-router-dom';
import styles from './Logo.module.css'

const Logo = (props) => {
	return (
		<div className={styles.logobar}>
  <NavLink className={styles.logo} to='/profile'>
            <img  src={logo} alt={logoAlt} />
            </NavLink>
        </div>
          
	
	);
};

export default Logo;
