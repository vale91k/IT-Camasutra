import React from 'react';
import styles from './Message.module.css';

const Message = ({ message, date, id }) => {
	const time = new Date();

	return id === 1 ? (
		<div className={styles.rightMessage}>
			<div className={styles.rightTextMessage}>{message}</div>
			<div className={styles.rightTime}>{date}</div>
		</div>
	) : (
		<div className={styles.leftMessage}>
			<div className={styles.leftTextMessage}>{message}</div>
			<div className={styles.leftTime}>{date}</div>
		</div>
	);
};

export default Message;
