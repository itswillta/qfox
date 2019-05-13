import { call, takeLatest, all } from 'redux-saga/effects';

import {
  FETCH_STUDY_CLASSES_ASYNC,
  CREATE_STUDY_CLASS_ASYNC,
  UPDATE_STUDY_CLASS_ASYNC,
  DELETE_STUDY_CLASS_ASYNC
} from './actionTypes';
import studyClassActions from './actions';
import studyClassRequests from './apiRequests';

import { openSnackbar } from '../../components/Notification';
import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';
import { redirectTo } from '../../services/history';
import appRoutes from '../../routers/appRoutes';
import { getCurrentUserProfile } from '../../services/auth';

function* fetchStudyClasses(action) {
  yield call(restApiWorkerSaga, studyClassRequests.fetch, action.payload, studyClassActions.fetch, {
    handleResponse: responseBody => responseBody.studyClasses
  });
}

function* createStudyClass(action) {
  yield call(
    restApiWorkerSaga,
    studyClassRequests.create,
    action.payload,
    studyClassActions.create,
    {
      handleResponse: responseBody => responseBody,
      afterSuccess: () => {
        openSnackbar('Successfully created a new class.');
        redirectTo(appRoutes.StudyClasses.url.replace(':userId', getCurrentUserProfile().id));
      }
    }
  );
}

function* updateStudyClass(action) {
  yield call(
    restApiWorkerSaga,
    studyClassRequests.update,
    action.payload,
    studyClassActions.update,
    {
      handleResponse: responseBody => responseBody,
      afterSuccess: () => {
        openSnackbar('Successfully updated class.');
        redirectTo(
          appRoutes.StudyClass.url
            .replace(':userId', action.payload.userId)
            .replace(':studyClassId', action.payload.studyClassId)
        );
      }
    }
  );
}

function* deleteStudyClass(action) {
  yield call(
    restApiWorkerSaga,
    studyClassRequests.deleteForever,
    action.payload,
    studyClassActions.deleteForever,
    {
      handleResponse: () => ({ studyClassId: action.payload.studyClassId }),
      afterSuccess: () => {
        openSnackbar('Successfully deleted class.');
        redirectTo(appRoutes.StudyClasses.url.replace(':userId', getCurrentUserProfile().id));
        action.payload.closeDialog();
      }
    }
  );
}

function* studyClassWatcherSaga() {
  yield all([
    takeLatest(FETCH_STUDY_CLASSES_ASYNC.PENDING, fetchStudyClasses),
    takeLatest(CREATE_STUDY_CLASS_ASYNC.PENDING, createStudyClass),
    takeLatest(UPDATE_STUDY_CLASS_ASYNC.PENDING, updateStudyClass),
    takeLatest(DELETE_STUDY_CLASS_ASYNC.PENDING, deleteStudyClass)
  ]);
}

export default studyClassWatcherSaga;
