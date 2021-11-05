import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepo } from '../../utils/repo';
import Repo from '../../components/Repo';
import './RepoContainer.less';

const RepoContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.items);
    const isFetching = useSelector((state) => state.repos.isFetching);
    useEffect(() => {
        dispatch(getRepo());
    }, []);
    const changeHandler = () => {
        dispatch(getRepo(inputValue));
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
        </div>
    );
};

export default RepoContainer;
