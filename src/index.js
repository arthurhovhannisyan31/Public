// external libraries
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
// local services & data store
// local containers
import Root from './containers/root';
// local components
// local constants
import CONSTS from './constants';
// local styles

render(<Root />, document.getElementById(CONSTS.DOM.ROOT));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// eslint test
// eslint test 1

