import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import RepoContainer from '../RepoContainer';
import RepoCard from '../../components/RepoCard';
import './App.less';

const App = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Switch>
                    <Route path='/' exact component={RepoContainer} />
                    <Route path='/card' component={RepoCard} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
