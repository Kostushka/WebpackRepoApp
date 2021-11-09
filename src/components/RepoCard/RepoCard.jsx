import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getContributors, getCurrentRepo } from '../../utils/repo';
import './RepoCard.less';

const RepoCard = (props) => {
    const { username, reponame } = useParams();
    const [repo, setRepo] = useState({ owner: {} });
    const [contributors, setContributors] = useState([]);

    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.repos.isFetching);

    useEffect(() => {
        dispatch(getCurrentRepo(username, reponame, setRepo));
        getContributors(username, reponame, setContributors);
    }, []);
    return (
        <>
            {isFetching ? (
                <div className='fetching'></div>
            ) : (
                <div className='card-container'>
                    <button
                        onClick={() => props.history.goBack()}
                        className='button'
                    >
                        Back
                    </button>
                    <div className='repo-card'>
                        <img
                            className='repo-img'
                            src={repo.owner.avatar_url}
                            alt='repo'
                        />
                        <div className='repo-name'>{repo.name}</div>
                        <div className='repo-star'>{repo.stargazers_count}</div>
                    </div>
                    <div className='list'>
                        {contributors.map((c, index) => (
                            <div key={index}>
                                {index + 1}. {c.login}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default RepoCard;
