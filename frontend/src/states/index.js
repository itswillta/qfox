import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { authReducer, authSagas } from './auth';
import { registerReducer, registerSagas } from './register';
import { studySetAsyncStatusReducer, studySetSagas } from './studySets';
import { studyClassAsyncStatusReducer, studyClassSagas } from './studyClasses';
import { fullStudySetReducer, fullStudySetSagas } from './fullStudySet';
import { fullStudyClassReducer, fullStudyClassSagas } from './fullStudyClass';
import { ormDBReducer } from './ormDB';
import { userAsyncStatusReducer, userSagas } from './users';
import { userTermAsyncStatusReducer, userTermSagas } from './userTerm';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registerReducer,
  studySetAsyncStatus: studySetAsyncStatusReducer,
  studyClassAsyncStatus: studyClassAsyncStatusReducer,
  userAsyncStatus: userAsyncStatusReducer,
  currentStudySet: fullStudySetReducer,
  currentStudyClass: fullStudyClassReducer,
  userTermAsyncStatus: userTermAsyncStatusReducer,
  ormDB: ormDBReducer
});

function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(registerSagas),
    fork(studySetSagas),
    fork(studyClassSagas),
    fork(userSagas),
    fork(fullStudySetSagas),
    fork(fullStudyClassSagas),
    fork(userTermSagas)
  ]);
}

export { rootReducer, rootSaga };
