import {
    IS_FETCH_ERROR,
    SET_CURRENT_PAGE,
    SET_IS_FETCHING,
    SET_REPO,
} from '../reducers/reposReducer';

export const setRepo = (repos) => ({
    type: SET_REPO,
    payload: repos,
});
export const setFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool,
});
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});
export const setFetchError = (bool) => ({
    type: IS_FETCH_ERROR,
    payload: bool,
});
