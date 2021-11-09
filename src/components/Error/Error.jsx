const Error = (props) => {
    return (
        <div>
            <button onClick={() => props.history.push('/')}>Main Page</button>
        </div>
    );
};

export default Error;
