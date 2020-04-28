import React from "react";
import {
  unfollow,
  follow,
  getUsersThunkCreator,
  setNewPage,
} from "../../redux/users-reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getPortionSize,
} from "../../redux/selectors/user-selectors";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Users from "./Users";
import { useEffect } from "react";



const UsersContainer = ({
  isFetching,
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  follow,
  unfollow,
  followingInProgress,
  portionSize,
  getUsersThunkCreator,
  setNewPage
}) => {

  useEffect(
    () => {
      getUsersThunkCreator(
        currentPage,
        pageSize
      )
    }, [currentPage, pageSize]
  );

  const onPageChanged = (pageNumber) => {
    setNewPage(
      pageNumber,
      pageSize
    );
  };

  return (
    <Users
      isFetching={isFetching}
      users={users}
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      follow={follow}
      unfollow={unfollow}
      followingInProgress={followingInProgress}
      portionSize={portionSize}
    />
  )
}


let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portionSize: getPortionSize(state)
  };
};
export default compose(
  connect(
    mapStateToProps,
    {
      follow,
      unfollow,
      getUsersThunkCreator,
      setNewPage,
    }
  ),
  withAuthRedirect
)(UsersContainer);
