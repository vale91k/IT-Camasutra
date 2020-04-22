import React from 'react';
import store from './redux/redux-store';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { Route, withRouter, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { initializeApp } from './redux/app-reducer';
import { getInitialized } from './redux/selectors/app-selectors';

import styles from './App.module.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/Login';
import TestContainer from './components/Test/TestContainer';
import ErrorPage from './components/ErrorPage/ErrorPage';

import LoadingPic from './components/common/Preloader/LoadingPic';

class App extends React.Component {
	catchAllUnhandledErrors = (promiseRejectionEvent) => {
		alert('SOME ERROR ACCURED');
	};

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
	}
	componentWillUnmount() {
		window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
	}

	render() {
		if (!this.props.initialized) {
			return <LoadingPic />;
		}

		return (
			<div className={styles.appWrapper}>
				<HeaderContainer />
				<Navbar />
				<div className={styles.appWrapperContent}>
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/profile" />} />
						<Route path="/dialogs/:dialogId?" render={() => <DialogsContainer />} />
						<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
						<Route path="/users" render={() => <UsersContainer />} />
						<Route path="/test" render={() => <TestContainer />} />
						<Route path="/news" render={() => <News />} />
						<Route path="/settings" render={() => <Settings />} />
						<Route path="/login" render={() => <LoginPage />} />
						<Route path="*"	render={() => <ErrorPage />} />
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { initialized: getInitialized(state)};
};

const AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
const SocialNetworkApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};
export default SocialNetworkApp;
