import React from "react";
import { unfollowAC, followAC, setUsersAC } from "../../redux/users-reducer";
import { connect} from 'react-redux'
import Users from './Users'




let mapStateToProps = (state) => {
  return {
  users: state.usersPage.users
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
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Users)

