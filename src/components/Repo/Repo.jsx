import { NavLink } from 'react-router-dom';
import './Repo.less';
const Repo = (props) => {
    const repo = props.repo;
    return (
        <div className='repo'>
            <div className='repo-header'>
                <div className='repo-header-name'>
                    <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink>
                </div>
                <div className='repo-header-stars'>{repo.stargazers_count}</div>
            </div>
            <div className='repo-last-commit'>{repo.updated_at}</div>
            <span>
                <a href={repo.html_url} className='repo-url'>
                    Ссылка на репозиторий
                </a>
            </span>
        </div>
    );
};

export default Repo;
