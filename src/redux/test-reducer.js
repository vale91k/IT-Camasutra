const FETCHING_BUTTON = 'FETCHING_BUTTON'
const LOADING = 'LOADING'
let initialState ={
    isFetching: false,
    isLoading: false
}
 const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_BUTTON: {
            return {...state, isFetching: action.isFetching}
        }
    case LOADING: {
        return{...state, isLoading: action.isLoading}
    }
        default:
           return state;
    }
}
export const fetchingAC = isFetching => {return {
    type: FETCHING_BUTTON,
    isFetching
}
}
export const isLoadingAC = isLoading => {return {
    type: LOADING,
    isLoading
}}
export default testReducer;