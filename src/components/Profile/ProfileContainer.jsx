import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersPageThunk } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUsersPageThunk(this.props.match.params.userId);
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile profile={this.props.profile} />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching
  };
};
export default compose(
  connect(mapStateToProps, { setUsersPageThunk }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
