import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import RepoContainer from '../RepoContainer';
import RepoCard from '../../components/RepoCard';
import Error from '../../components/Error';

import './App.less';

const App = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Switch>
                    <Route path='/' exact component={RepoContainer} />
                    <Route
                        path='/card/:username/:reponame'
                        component={RepoCard}
                    />
                    <Route path='/error' component={Error} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
