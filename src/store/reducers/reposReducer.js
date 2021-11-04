export const SET_REPO = 'SET_REPO';

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
            };

        default:
            return state;
    }
};
export default reposReducer;
