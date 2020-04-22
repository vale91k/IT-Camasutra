import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getDialogs, getMessages, getnewMessageText } from '../../redux/selectors/dialogs-selectors';
import { addMessageThunk } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		dialogs: getDialogs(state),
		messages: getMessages(state),
		newMessageText: getnewMessageText(state)
	};
};

export default compose(connect(mapStateToProps, { addMessageThunk }), withRouter, withAuthRedirect)(Dialogs);
