import React from "react";
import Paginator from "../common/Paginator/Pagenator";
import User from "./User";

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
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator
        onClick={onClick}
        currentPage={currentPage}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        onPageChanged={onPageChanged}
      />

      {users.map((user) => (
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
    </div>
  );
};

export default Users;
