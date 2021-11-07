import './RepoCard.less';

const RepoCard = (props) => {
    return (
        <div className='card-container'>
            <button onClick={() => props.history.goBack()} className='button'>
                Back
            </button>
        </div>
    );
};

export default RepoCard;
