import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../../store/actions';
import './App.less';

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.repos.count);
    const onCountClick = (e) => {
        dispatch(setCount(4));
    };
    return (
        <div className='app'>
            <button onClick={onCountClick}>count</button>
            <div>{count}</div>
        </div>
    );
};

export default App;
