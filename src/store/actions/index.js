import { SET_COUNT } from '../reducers/reposReducer';

export const setCount = (count) => ({
    type: SET_COUNT,
    payload: count,
});
