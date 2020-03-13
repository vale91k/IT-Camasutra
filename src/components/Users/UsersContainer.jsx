import React from "react";
import { unfollowAC, followAC, setUsersAC, setCurrentPageAC, setTotalUsersAC } from "../../redux/users-reducer";
import { connect} from 'react-redux'
import Users from './Users'




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
export default connect(mapStateToProps, mapDispatchToProps)(Users)

