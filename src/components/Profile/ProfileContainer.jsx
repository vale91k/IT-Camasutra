import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {   setUsersPageThunk} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    
    this.props.setUsersPageThunk(this.props.match.params.userId )
  }
  render() {
    if (!this.props.isAuth) {

      return <Redirect to={'/login'} />
    }
    return (
      <>
         {this.props.isFetching ? <Preloader /> :
          <Profile  profile={this.props.profile} />
        }
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {   setUsersPageThunk   })( WithUrlDataContainerComponent);
