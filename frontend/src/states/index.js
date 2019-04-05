import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { authReducer, authSagas } from './auth';
import { registerReducer, registerSagas } from './register';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registerReducer
});

function* rootSaga() {
  yield all([fork(authSagas), fork(registerSagas)]);
}

export { rootReducer, rootSaga };
