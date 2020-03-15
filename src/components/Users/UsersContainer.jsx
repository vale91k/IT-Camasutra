import React from "react";
import { unfollowAC, followAC, setUsersAC, setCurrentPageAC, setTotalUsersAC } from "../../redux/users-reducer";
import { connect} from 'react-redux'
import * as Axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then(Response => {
      this.props.setUsers(Response.data.items);

      this.props.setTotalUsers(Response.data.totalCount);
    });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);

    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then(Response => {
      this.props.setUsers(Response.data.items);
    });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}


let mapStateToProps = (state) => {
  return {
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage

  }
}

  let mapDispatchToProps = (dispatch) => {

    return {
      follow: (userId) => {
        dispatch(followAC(userId))
      },
      unfollow: (userId) => {
        dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
        dispatch(setUsersAC(users))
      },
      setCurrentPage: (PageNumber) => {
        dispatch(setCurrentPageAC(PageNumber))
      },
      setTotalUsers: (totalUsers) => {
        dispatch(setTotalUsersAC(totalUsers))
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

