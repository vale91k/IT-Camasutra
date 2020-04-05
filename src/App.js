import React from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import TestContainer from "./components/Test/TestContainer";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import  LoginPage  from "./components/Login/Login"
import { compose } from "redux";
import Preloader from './components/common/Preloader/Preloader'
import { withAuthRedirect } from "./hoc/withAuthRedirect";
import Picture from './components/common/Preloader/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif'


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render () {
    if (!this.props.initialized) {
   
      return <img src={Picture} />
     }
    
     return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/test" render={() => <TestContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
   )
    
    
  
  }
  
};
const mapStateToProps = state => {
  return {  initialized: state.app.initialized}}

export default compose(
   connect(mapStateToProps, { initializeApp })
   )(App);
