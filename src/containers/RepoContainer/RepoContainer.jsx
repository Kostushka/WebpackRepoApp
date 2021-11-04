import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepo } from '../../utils/repo';
import Repo from '../../components/Repo';
import './RepoContainer.less';

const RepoContainer = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.items);
    useEffect(() => {
        dispatch(getRepo());
    }, []);
    return (
        <div>
            {repos.map((repo) => (
                <Repo key={repo.id} repo={repo} />
            ))}
        </div>
    );
};

export default RepoContainer;
