export const SET_REPO = 'SET_REPO';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGES';

const initialState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 5,
    totalCount: 0,
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

        default:
            return state;
    }
};
export default reposReducer;
