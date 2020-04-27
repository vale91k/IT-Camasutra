import React from "react";
import Paginator from './../common/Paginator/Pagenator'
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import styles from './Users.module.css'


let Users = ({
  onClick,
  pageSize,
  currentPage,
  totalUsersCount,
  onPageChanged,
  users,
  followingInProgress,
  unfollow,
  follow,
  isFetching,
  portionSize
}) => {

  return (
    <div className={styles.usersPage}>
     
      

      {isFetching ? <Preloader /> :
        users.map((user) => (
         <User
          id={user.id}
          smallPhoto={user.photos.small}
          followed={user.followed}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
          status={user.status}
          username={user.name}
         />
      ))}

      <Paginator
        onClick={onClick}
        currentPage={currentPage}
        pageSize={pageSize}
        portionSize={portionSize}
        itemsCount={totalUsersCount}
        onPageChanged={onPageChanged}
        isFetching={isFetching}
      /> 
      
    </div>
  );
};

export default Users;
