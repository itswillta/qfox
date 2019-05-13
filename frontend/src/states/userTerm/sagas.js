import { call, takeLatest, all } from 'redux-saga/effects';

import { UPDATE_USER_TERM, FETCH_USER_TERM_ASYNC } from './actionTypes';
import userTermActions from './actions';
import userTermRequests from './requests';

import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';

function* updateUserTerm(action) {
  yield call(
    restApiWorkerSaga,
    userTermRequests.update,
    action.payload,
    userTermActions.updateUserTerm,
    {
      handleResponse: responseBody => responseBody
    }
  );
}

function* fetchUserTerm(action) {
  yield call(
    restApiWorkerSaga,
    userTermRequests.fetch,
    action.payload,
    userTermActions.fetchUserTerm,
    {
      handleResponse: responseBody => responseBody
    }
  );
}

function* userTermWatcherSaga() {
  yield all([
    takeLatest(UPDATE_USER_TERM.PENDING, updateUserTerm),
    takeLatest(FETCH_USER_TERM_ASYNC.PENDING, fetchUserTerm)
  ]);
}

export default userTermWatcherSaga;
