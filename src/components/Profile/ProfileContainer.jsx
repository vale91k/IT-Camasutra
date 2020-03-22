import React from "react";
import Axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, toogleIsFetching } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    ).then(Response => {
      this.props.setUserProfile(Response.data);
    });
  }
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile {...this.props} profile={this.props.profile} />
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, toogleIsFetching })(
  WithUrlDataContainerComponent
);
