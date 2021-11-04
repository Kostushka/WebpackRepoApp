const { default: axios } = require('axios');

import { setRepo } from '../store/actions';

export const getRepo = (searchQuery = 'stars:%3E1') => {
    return async (dispatch) => {
        const res = await axios.get(
            `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`
        );
        dispatch(setRepo(res.data));
    };
};
