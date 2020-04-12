import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersPageThunk, updateStatusThunk, getStatusThunk } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
  
    let userId = this.props.match.params.userId
  
   if (!userId) {
     userId = this.props.id
     if (!userId) {
       this.props.history.push('/login')
     }
   }
    this.props.setUsersPageThunk(userId );
    
      this.props.getStatusThunk(userId)
   
    
  }
  render() {
 
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile updateStatusThunk={this.props.updateStatusThunk} status={this.props.status} profile={this.props.profile} />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    id: state.auth.id
  };
};

export default compose(
  connect(mapStateToProps, { setUsersPageThunk, updateStatusThunk, getStatusThunk }),
  withRouter,
      withAuthRedirect
)(ProfileContainer);

