import { SET_REPO } from '../reducers/reposReducer';

export const setRepo = (repos) => ({
    type: SET_REPO,
    payload: repos,
});
