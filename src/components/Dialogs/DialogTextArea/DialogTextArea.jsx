import React from 'react';
import styles from './DialogTextArea.module.css';
import { Field } from 'redux-form';
import { Element } from '../../common/FormsControls/FormsControls';

const TextArea = Element('textarea');

const DialogTextArea = ({ meta, handleSubmit, ...props }) => {
	return (
		<form className={styles.textarea} onSubmit={handleSubmit}>
			<div className={styles.fieldarea}>
				<Field name={'newMessageBody'} component={TextArea} placeholder={'Write a message...'} />
			</div>

			<button>Submit</button>
		</form>
	);
};

export default DialogTextArea;
