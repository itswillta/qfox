import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './i18n';

import App from './App';

import configureStore from './store';
import { authHelpers, authActions } from './services/auth';

const store = configureStore();

const authToken = authHelpers.getExistingToken();
if (authToken) {
  const userProfile = authHelpers.getUserProfileFromToken(authToken);
  store.dispatch(authActions.currentUser.set(userProfile));
}

ReactDOM.render(<App store={store} />, document.getElementById('app'));
