import React from 'react';
import { reduxForm, reset } from 'redux-form';
import styles from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogTextArea from './DialogTextArea/DialogTextArea';



const afterSubmit = (result, dispatch) => dispatch(reset('dialogs'));
const DialogTextForm = reduxForm({ form: 'dialogs', onSubmitSuccess: afterSubmit })(DialogTextArea);

const Dialogs = ({ dialogs, messages, addMessageThunk, ...props }) => {
	
	let dialogId = props.match.params.dialogId ? props.match.params.dialogId : 1

	const dialogsElements = dialogs.map((d) => 
	<DialogItem key={d.id}
				name={d.name}
				id={d.id}
				avatar={d.avatar}
				dialogId={dialogId} />);

	const messagesElements = messages[dialogId].map((m, i) => (
		<Message key={i}
				 message={m.message}
				 id={m.id} 
				 date={m.date} />
	));

	const onSubmit = ({ newMessageBody }) => {
		const time = new Date();
		if (newMessageBody) {
			addMessageThunk(newMessageBody, time.toLocaleTimeString(), dialogId);
		}
	};

	return (
		<div className={styles.dialogs}>

			<div className={styles.dialogsItems}>{dialogsElements}</div>
			<div className={styles.messageElements}>{messagesElements}</div>

			<DialogTextForm onSubmit={onSubmit} />
		</div>
	);
};

export default Dialogs;
