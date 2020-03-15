const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_ISFETCHING = "TOOGGLE_ISFETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 3,
  isFetching: false
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
    case TOGGLE_ISFETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setCurrentPageAC = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalUsersAC = totalUsers => ({
  type: SET_TOTAL_USERS,
  totalUsers
});
export const toogleIsFetchingAC = isFetching => ({
  type: TOGGLE_ISFETCHING,
  isFetching
});

export default usersReducer;
