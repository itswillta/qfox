import { call, takeLatest } from 'redux-saga/effects';

import { FETCH_STUDY_SETS_ASYNC } from './actionTypes';
import studySetActions from './actions';
import studySetRequests from './apiRequests';

import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';

function* fetchStudySet(action) {
  yield call(restApiWorkerSaga, studySetRequests.fetch, action.payload, studySetActions.fetch, {
    handleResponse: responseBody => responseBody.studySets
  });
}

function* studySetWatcherSaga() {
  yield takeLatest(FETCH_STUDY_SETS_ASYNC.PENDING, fetchStudySet);
}

export default studySetWatcherSaga;
