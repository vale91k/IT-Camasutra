import React from "react";
import {
  unfollow,
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  toogleIsFetching
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import * as Axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UserAPI} from '../../api/api'
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    UserAPI.
    getUsers(this.props.currentPage, this.props.pageSize)
   .then(data => {
      this.props.toogleIsFetching(false);

      this.props.setUsers(data.items);

      this.props.setTotalUsers(data.totalCount);
    });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFetching(true);
UserAPI.
     getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toogleIsFetching(false);

      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followAC(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: PageNumber => {
//       dispatch(setCurrentPageAC(PageNumber));
//     },
//     setTotalUsers: totalUsers => {
//       dispatch(setTotalUsersAC(totalUsers));
//     },
//     toogleIsFetching: isFetching => {
//       dispatch(toogleIsFetchingAC(isFetching));
//     }
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  toogleIsFetching
})(UsersContainer);
