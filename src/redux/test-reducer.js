const FOLLOWED_BUTTON = "FOLLOWED_BUTTON";
const LOADING = "LOADING";

let initialState = {
  isFollowed: false,
  isLoading: [],
  test: false
};

const testReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case FOLLOWED_BUTTON: {
      return { ...state, isFollowed: action.isFollowed };
    }
   
    case LOADING: {
   
      return { ...state,
        isLoading: action.isLoading ? [...state.isLoading, action.id] : state.isLoading.filter( x => x != action.id)
      };
    }
    default:
      return state;
  }
};
export const followedAC = isFollowed => ({
    type: FOLLOWED_BUTTON,
    isFollowed
});
export const isLoadingAC = (isLoading, id) => ({
    type: LOADING,
    isLoading,
    id
  });


export default testReducer;
