import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { authReducer, authSagas } from './auth';

const rootReducer = combineReducers({
  auth: authReducer
});

function* rootSaga() {
  yield all([fork(authSagas)]);
}

export { rootReducer, rootSaga };
