import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './containers/App';
window.React = React;

import './index.less';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
