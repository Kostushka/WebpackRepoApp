import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepo } from '../../utils/repo';
import Repo from '../../components/Repo';
import './RepoContainer.less';
import { pagesCreator } from '../../utils/pagesCreator';
import { setCurrentPage } from '../../store/actions';

const RepoContainer = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const repos = useSelector((state) => state.repos.items);
    const isFetching = useSelector((state) => state.repos.isFetching);
    const currentPage = useSelector((state) => state.repos.currentPage);
    const perPage = useSelector((state) => state.repos.perPage);
    const totalCount = useSelector((state) => state.repos.totalCount);
    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];
    pagesCreator(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(getRepo(inputValue, perPage, currentPage));
    }, [currentPage]);
    const changeHandler = () => {
        dispatch(setCurrentPage(1));
        dispatch(getRepo(inputValue, perPage, currentPage));
        setInputValue('');
    };
    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            changeHandler();
        }
    };
    return (
        <div>
            <div className='search'>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={onKeyDownHandler}
                    type='text'
                    placeholder='Input repo name'
                    className='search-input'
                />
                <button onClick={changeHandler} className='search-button'>
                    Search
                </button>
            </div>
            {isFetching ? (
                <div className='fetching'></div>
            ) : (
                repos.map((repo) => <Repo key={repo.id} repo={repo} />)
            )}
            <div className='pages'>
                {pages.map((page, index) => (
                    <span
                        key={index}
                        className={
                            currentPage === page ? 'current-page' : 'page'
                        }
                        onClick={() => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RepoContainer;
