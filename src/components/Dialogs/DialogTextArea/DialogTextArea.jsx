import React from 'react';
import styles from './DialogTextArea.module.css';
import { Field } from 'redux-form';
import { Element, createField } from '../../common/FormsControls/FormsControls';
import { required, maxLength } from '../../../utils/validators/validators';

const TextArea = Element('textarea');
const maxLength100 = maxLength(100);
const DialogTextArea = (props) => {
	return (
		<form className={styles.textarea} onSubmit={props.handleSubmit}>
	
				{createField('newMessageBody', TextArea, [ maxLength100 ], { placeholder: 'Write a message...' })}
		
			<button>Submit</button>
		</form>
	);
};

export default DialogTextArea;
