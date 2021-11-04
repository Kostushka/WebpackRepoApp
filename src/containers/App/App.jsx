import { BrowserRouter, Route } from 'react-router-dom';
import RepoContainer from '../RepoContainer';
import './App.less';

const App = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Route path='/' component={RepoContainer} />
            </div>
        </BrowserRouter>
    );
};

export default App;
