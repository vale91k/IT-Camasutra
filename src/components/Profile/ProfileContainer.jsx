import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {   setUsersPageThunk} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    
    this.props.setUsersPageThunk(this.props.match.params.userId )
  }
  render() {
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
    isFetching: state.profilePage.isFetching
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {   setUsersPageThunk   })( WithUrlDataContainerComponent);
