import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersPageThunk, updateStatusThunk, getStatusThunk } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
  
    let userId = this.props.match.params.userId
   
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
    status: state.profilePage.status
  };
};
export default compose(
  connect(mapStateToProps, { setUsersPageThunk, updateStatusThunk, getStatusThunk }),
  withRouter,
  //  withAuthRedirect
)(ProfileContainer);
