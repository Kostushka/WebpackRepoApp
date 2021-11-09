const { default: axios } = require('axios');

import { setFetchError, setFetching, setRepo } from '../store/actions';

export const getRepo = (searchQuery = 'stars:%3E1', perPage, currentPage) => {
    if (searchQuery === '') {
        searchQuery = 'stars:%3E1';
    }
    return async (dispatch) => {
        try {
            dispatch(setFetching(true));
            const res = await axios.get(
                `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`
            );
            dispatch(setRepo(res.data));
        } catch (e) {
            dispatch(setFetchError(true));
            dispatch(setFetching(false));
            setTimeout(() => {
                dispatch(setFetchError(false));
            }, 2000);
        }
    };
};

export const getCurrentRepo = (userName, repoName, setRepo) => {
    return async (dispatch) => {
        dispatch(setFetching(true));
        const res = await axios.get(
            `https://api.github.com/repos/${userName}/${repoName}`
        );
        dispatch(setFetching(false));
        setRepo(res.data);
    };
};

export const getContributors = async (userName, repoName, setContributors) => {
    const res = await axios.get(
        `https://api.github.com/repos/${userName}/${repoName}/contributors`
    );
    setContributors(res.data);
};
