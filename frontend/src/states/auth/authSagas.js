/* eslint-disable no-console */
import { all, call, takeLatest } from 'redux-saga/effects';

import { LOGIN_ASYNC, CURRENT_USER } from './authActionTypes';
import authActions from './authActions';
import authRequests from './authRequests';
import { getUserProfileFromToken, setUpToken, cleanUpToken } from '../../services/auth';
import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';

function* loginUser(action) {
  const handleResponse = responseBody => {
    setUpToken(responseBody.authToken);
    return getUserProfileFromToken(responseBody.authToken);
  };

  if (action.payload.isRelogin) {
    yield call(restApiWorkerSaga, authRequests.requestReLogin, action.payload, authActions.login, {
      handleResponse
    });
  }

  yield call(restApiWorkerSaga, authRequests.requestLogin, action.payload, authActions.login, {
    handleResponse
  });
}

function* logoutUser() {
  try {
    yield call(cleanUpToken);
  } catch (error) {
    console.error(error);
  }
}

function* authWatcherSaga() {
  yield all([
    takeLatest(LOGIN_ASYNC.PENDING, loginUser),
    takeLatest(CURRENT_USER.LOGOUT, logoutUser)
  ]);
}

export default authWatcherSaga;
