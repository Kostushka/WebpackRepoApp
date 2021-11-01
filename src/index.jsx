import React from 'react';
import { render } from 'react-dom';
window.React = React;

import App from './containers/App';
import './index.less';

render(<App />, document.getElementById('root'));
