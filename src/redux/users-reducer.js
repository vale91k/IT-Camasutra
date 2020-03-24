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
  followingInProgress: false
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
      return { ...state, followingInProgress: action.isFollowing };
    }
    default:
      return state;
  }
};
export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
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
export const toggleIsFollowingProgress = isFollowing => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowing
});

export default usersReducer;
