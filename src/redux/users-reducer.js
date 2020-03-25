import { UserAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 3,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(x => {
          if (x.id === action.userId) {
            return { ...x, followed: true };
          }
          return x;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(x => {
          if (x.id === action.userId) {
            return { ...x, followed: false };
          }
          return x;
        })
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS: {
      return { ...state, totalUsersCount: action.totalUsers };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(x => x != action.id)
      };
    }

    default:
      return state;
  }
};
export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalUsers = totalUsers => ({
  type: SET_TOTAL_USERS,
  totalUsers
});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const toggleIsFollowingProgress = (isFetching, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  id
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    UserAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
    });
  };
};
export const setNewPage = (currentPage = 1, pageSize) => {
  return dispatch => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    UserAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));

      dispatch(setUsers(data.items));
    });
  };
};
export const unfollow = id => {
  return dispatch => {
    dispatch(toggleIsFollowingProgress(true, id));

    UserAPI.unfollowApi(id).then(Response => {
      if (Response.data.resultCode === 0) {
        dispatch(unfollowSuccess(id));
      }
      dispatch(toggleIsFollowingProgress(false, id));
    });
  };
};

export const follow = id => {
  return dispatch => {
    dispatch(toggleIsFollowingProgress(true, id));
    UserAPI.followApi(id).then(Response => {
      if (Response.data.resultCode === 0) {
        dispatch(followSuccess(id));
      }
      dispatch(toggleIsFollowingProgress(false, id));
    });
  };
};

export default usersReducer;
