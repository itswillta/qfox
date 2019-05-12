import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { authReducer, authSagas } from './auth';
import { registerReducer, registerSagas } from './register';
import { studySetAsyncStatusReducer, studySetSagas } from './studySets';
import { fullStudySetReducer, fullStudySetSagas } from './fullStudySet';
import { ormDBReducer } from './ormDB';
import { userAsyncStatusReducer, userSagas } from './users';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registerReducer,
  studySetAsyncStatus: studySetAsyncStatusReducer,
  userAsyncStatus: userAsyncStatusReducer,
  currentStudySet: fullStudySetReducer,
  ormDB: ormDBReducer
});

function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(registerSagas),
    fork(studySetSagas),
    fork(userSagas),
    fork(fullStudySetSagas)
  ]);
}

export { rootReducer, rootSaga };
