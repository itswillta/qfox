import { call, takeLatest } from 'redux-saga/effects';

import { FETCH_STUDY_SET_ASYNC } from './actionTypes';
import studySetActions from './actions';
import studySetRequests from './requests';

import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';

function* fetchStudySet(action) {
  yield call(
    restApiWorkerSaga,
    studySetRequests.fetch,
    action.payload,
    studySetActions.fetchStudySet,
    {
      handleResponse: responseBody => responseBody
    }
  );
}

function* studySetWatcherSaga() {
  yield takeLatest(FETCH_STUDY_SET_ASYNC.PENDING, fetchStudySet);
}

export default studySetWatcherSaga;
