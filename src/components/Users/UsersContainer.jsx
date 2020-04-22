import React from "react";
import {
  unfollow,
  follow,
  getUsersThunkCreator,
  setNewPage,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/selectors/user-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsersThunkCreator(
      currentPage,
      pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.setNewPage(pageNumber, pageSize);
  };

  render() {
    const {isFetching, users, pageSize, totalUsersCount, currentPage, follow, unfollow, followingInProgress} = this.props
    return (
      <>
       
          <Users
          isFetching={isFetching}
            users={users}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            onPageChanged={this.onPageChanged}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
          />
       
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsersThunkCreator,
    setNewPage,
  }),
  withAuthRedirect
)(UsersContainer);
