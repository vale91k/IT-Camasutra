import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';
import cn from 'classnames'


const DialogItem = ({ name, id, avatar, dialogId }) => {
	let path = '/dialogs/' + id;
	
	return (
		<div className={styles.dialogs}>
			<NavLink className={cn(
				   styles.dialog,
				 {[styles.active]: id === dialogId}
				 )} 
				 activeClassName={styles.active} to={path}  >
				<img src={avatar} />
				<div className={styles.dialogName}>{name}</div>
			</NavLink>
		</div>
	);
};

export default DialogItem;
