import { call, takeLatest, all } from 'redux-saga/effects';

import { FETCH_STUDY_SETS_ASYNC, CREATE_STUDY_SET_ASYNC } from './actionTypes';
import studySetActions from './actions';
import studySetRequests from './apiRequests';

import { openSnackbar } from '../../components/Notification';
import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';
import { redirectTo } from '../../services/history';
import appRoutes from '../../routers/appRoutes';
import { getCurrentUserProfile } from '../../services/auth';

function* fetchStudySet(action) {
  yield call(restApiWorkerSaga, studySetRequests.fetch, action.payload, studySetActions.fetch, {
    handleResponse: responseBody => responseBody.studySets
  });
}

function* createStudySet(action) {
  yield call(restApiWorkerSaga, studySetRequests.create, action.payload, studySetActions.create, {
    handleResponse: responseBody => responseBody,
    afterSuccess: () => {
      openSnackbar('Successfully created a new study set.');
      redirectTo(appRoutes.StudySets.url.replace(':userId', getCurrentUserProfile().id));
    }
  });
}

function* studySetWatcherSaga() {
  yield all([
    takeLatest(FETCH_STUDY_SETS_ASYNC.PENDING, fetchStudySet),
    takeLatest(CREATE_STUDY_SET_ASYNC.PENDING, createStudySet)
  ]);
}

export default studySetWatcherSaga;
