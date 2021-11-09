export const SET_REPO = 'SET_REPO';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGES';
export const IS_FETCH_ERROR = 'IS_FETCH_ERROR';

const initialState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 5,
    totalCount: 0,
    isFetchError: false,
};
const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPO:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false,
                totalCount: action.payload.total_count,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case IS_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload,
            };

        default:
            return state;
    }
};
export default reposReducer;
