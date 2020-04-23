import React from 'react';
import styles from './Header.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import Logo from './Logo/Logo';
import AuthBar from './AuthBar/AuthBar';

const Header = ({ isAuth, login, isFetching, logout, ...props }) => {
	return (
		<header className={styles.header}>
			<Logo />
			<AuthBar isAuth={isAuth} login={login} isFetching={isFetching} logout={logout}/>
		</header>
	);
};
export default Header;
