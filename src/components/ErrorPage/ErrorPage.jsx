import React from 'react';
import styles from './ErrorPage.module.css';
import * as errorPic from '../../assets/gif/ErrorPage/404.gif';
import * as errorPicAlt from '../../assets/gif/ErrorPage/404_alt.gif';

const ErrorPage = (props) => {
	return (
		<div className={styles.errorArea}>
			<div className={styles.errorText}>
				<h1>404</h1>
				<h2>Page Not Found</h2>
				<h3>
					The page you are looking for might have been removed had its name changed or is temporarily
					unavailable.
				</h3>
			</div>

			<a href="/profile">Profile page</a>
		</div>
	);
};
export default ErrorPage;
