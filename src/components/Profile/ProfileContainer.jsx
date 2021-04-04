import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  savePhoto,
  setUsersPageThunk,
  updateStatusThunk,
  getStatusThunk,
  saveProfile,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { useEffect } from "react";
import { useRef } from "react";


class ProfileContainer extends React.Component {

  refreshProfile() {
    
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.id; // айдишник из стейта, если мы залогинились, если сидим на чисто /profile без айди
      if (!userId) {
        this.props.history.push("/login"); // history.push это с реакт роутер дома функция, редиректит на логин.
      }
    }
    this.props.setUsersPageThunk(userId);

    this.props.getStatusThunk(userId);
  }
  componentDidMount() {
    
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      if (
        Number(prevProps.match.params.userId) !== this.props.authorizedUserId
      ) {
        this.refreshProfile();
      }
    }
  }
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile
            saveProfile={this.props.saveProfile}
            isOwner={!this.props.match.params.userId} // мы владелец страницы, если находимся на /profile без айдишника.
            updateStatusThunk={this.props.updateStatusThunk}
            status={this.props.status}
            profile={this.props.profile}
            savePhoto={this.props.savePhoto}
          />
        )}
      </>
    );
  }
}

const  ProfileContainer2 = ({
  authorizedUserId,
  setUsersPageThunk,
  getStatusThunk,
  isFetching,
  saveProfile,
  updateStatusThunk,
  status,
  profile,
  savePhoto,
...props
}) => {
  const [userIdd] = useState(props.match.params.userId)
  const prevIdRef = useRef()
  const refreshProfile = () => {
    let userId = props.match.params.userId;
    
    if (!userId) {
      userId = props.id; // айдишник из стейта, если мы залогинились, если сидим на чисто /profile без айди
      if (!userId) {
        props.history.push("/login"); // history.push это с реакт роутер дома функция, редиректит на логин.
      }
    }
    setUsersPageThunk(userId);
    getStatusThunk(userId);
  }
   // ТУТ НАДО НАЙТИ ПРЕДЫДУЩИЙ ПРОПС И СРАВНИТЬ С НАСТОЯЩИМ) ГЛ ХФ
  useEffect(() => {
console.log(prevIdRef.current = userIdd)
prevIdRef.current = userIdd
const prevId = prevIdRef.current

 if (Number(prevId) !== authorizedUserId) { 
  debugger

  refreshProfile();
}
        
  },[props.match.params.userId]
      )
   
 
    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <Profile
            saveProfile={saveProfile}
            isOwner={!props.match.params.userId} // мы владелец страницы, если находимся на /profile без айдишника.
            updateStatusThunk={updateStatusThunk}
            status={status}
            profile={profile}
            savePhoto={savePhoto}
          />
        )}
      </>
    );
  }


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    id: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUsersPageThunk,
    updateStatusThunk,
    getStatusThunk,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer2);
