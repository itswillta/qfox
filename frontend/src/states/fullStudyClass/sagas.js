import { call, takeLatest, all, put } from 'redux-saga/effects';

import {
  FETCH_STUDY_CLASS_ASYNC,
  REMOVE_STUDY_SETS_ASYNC,
  ADD_STUDY_SET_ASYNC
} from './actionTypes';
import studyClassActions from './actions';
import studyClassRequests from './requests';

import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';
import { openSnackbar } from '../../components/Notification';

function* fetchStudyClass(action) {
  yield call(
    restApiWorkerSaga,
    studyClassRequests.fetch,
    action.payload,
    studyClassActions.fetchStudyClass,
    {
      handleResponse: responseBody => responseBody
    }
  );
}

function* removeStudySets(action) {
  yield call(
    restApiWorkerSaga,
    studyClassRequests.removeStudySets,
    action.payload,
    studyClassActions.removeStudySets,
    {
      afterSuccess: function* afterSuccess() {
        yield put(studyClassActions.fetchStudyClass.pending(action.payload));
        openSnackbar('Removed study set from class.');
      }
    }
  );
}

function* addStudySet(action) {
  yield call(
    restApiWorkerSaga,
    studyClassRequests.addStudySet,
    action.payload,
    studyClassActions.addStudySet,
    {
      afterSuccess: function* afterSuccess() {
        yield put(studyClassActions.fetchStudyClass.pending(action.payload));
        openSnackbar('Successfully added study set to class.');
      }
    }
  );
}

function* studyClassWatcherSaga() {
  yield all([
    takeLatest(FETCH_STUDY_CLASS_ASYNC.PENDING, fetchStudyClass),
    takeLatest(REMOVE_STUDY_SETS_ASYNC.PENDING, removeStudySets),
    takeLatest(ADD_STUDY_SET_ASYNC.PENDING, addStudySet)
  ]);
}

export default studyClassWatcherSaga;
