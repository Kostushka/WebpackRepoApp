const { default: axios } = require('axios');

import { setFetching, setRepo } from '../store/actions';

export const getRepo = (searchQuery = 'stars:%3E1', perPage, currentPage) => {
    if (searchQuery === '') {
        searchQuery = 'stars:%3E1';
    }
    return async (dispatch) => {
        dispatch(setFetching(true));
        const res = await axios.get(
            `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`
        );
        dispatch(setRepo(res.data));
    };
};
