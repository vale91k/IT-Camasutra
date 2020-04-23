import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import styles from './AuthBar.module.css';



const AuthBar = ({ isAuth, login, logout }) => {
	return (
		<div className={styles.login_block}>
			{isAuth 
			? <LoginedBar login={login} logout={logout} /> 
			: <UnLoginedBar />}
		</div>
	);
};

const LoginedBar = ({ login, logout }) => {
	const logoutClick = () => {
		logout();
		return <Redirect to={'/login'} />;
	};
	return (
		<div >
			<div className={styles.loginName}>
			{login}
			</div>
			
			<div className={styles.loginButton} onClick={logoutClick}>
				Logout
			</div>
		</div>
);
};
const UnLoginedBar = (props) => {
	return (
		<div>
			<NavLink className={styles.loginButton} to="/login">
				Login
			</NavLink>
		</div>
	);
};

export default AuthBar;
