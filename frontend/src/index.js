import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './i18n';

import App from './App';

import configureStore from './store';
import { authenticateOnPageLoad } from './services/auth';

const store = configureStore();

authenticateOnPageLoad(store);

ReactDOM.render(<App store={store} />, document.getElementById('app'));
