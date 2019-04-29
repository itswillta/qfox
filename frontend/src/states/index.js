import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';

import { authReducer, authSagas } from './auth';
import { registerReducer, registerSagas } from './register';
import { studySetAsyncStatusReducer, studySetSagas } from './studySets';
import { ormDBReducer } from './ormDB';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registerReducer,
  studySetAsyncStatus: studySetAsyncStatusReducer,
  ormDB: ormDBReducer,
  form: formReducer
});

function* rootSaga() {
  yield all([fork(authSagas), fork(registerSagas), fork(studySetSagas)]);
}

export { rootReducer, rootSaga };
