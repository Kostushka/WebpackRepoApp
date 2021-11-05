export const SET_REPO = 'SET_REPO';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
    items: [],
    isFetching: true,
    count: 0,
};
const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPO:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };

        default:
            return state;
    }
};
export default reposReducer;
