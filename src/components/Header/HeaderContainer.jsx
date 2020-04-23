import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { getIsAuth, getLogin, getIsFetching } from '../../redux/selectors/auth-selectors';



class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: getIsAuth(state),
	login: getLogin(state),
	isFetching: getIsFetching(state)
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
