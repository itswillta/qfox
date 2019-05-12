import { call, takeLatest, all } from 'redux-saga/effects';

import {
  FETCH_STUDY_SETS_ASYNC,
  CREATE_STUDY_SET_ASYNC,
  UPDATE_STUDY_SET_ASYNC,
  DELETE_STUDY_SET_ASYNC
} from './actionTypes';
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

function* updateStudySet(action) {
  yield call(restApiWorkerSaga, studySetRequests.update, action.payload, studySetActions.update, {
    handleResponse: responseBody => responseBody,
    afterSuccess: () => {
      openSnackbar('Successfully updated study set.');
      redirectTo(
        appRoutes.StudySet.url
          .replace(':userId', action.payload.userId)
          .replace(':studySetId', action.payload.studySetId)
      );
    }
  });
}

function* deleteStudySet(action) {
  yield call(
    restApiWorkerSaga,
    studySetRequests.deleteForever,
    action.payload,
    studySetActions.deleteForever,
    {
      handleResponse: () => ({ studySetId: action.payload.studySetId }),
      afterSuccess: () => {
        openSnackbar('Successfully deleted study set.');
        redirectTo(appRoutes.StudySets.url.replace(':userId', getCurrentUserProfile().id));
        action.payload.closeDialog();
      }
    }
  );
}

function* studySetWatcherSaga() {
  yield all([
    takeLatest(FETCH_STUDY_SETS_ASYNC.PENDING, fetchStudySet),
    takeLatest(CREATE_STUDY_SET_ASYNC.PENDING, createStudySet),
    takeLatest(UPDATE_STUDY_SET_ASYNC.PENDING, updateStudySet),
    takeLatest(DELETE_STUDY_SET_ASYNC.PENDING, deleteStudySet)
  ]);
}

export default studySetWatcherSaga;
