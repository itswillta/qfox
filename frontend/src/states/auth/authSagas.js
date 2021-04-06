/* eslint-disable no-console */
import { all, call, takeLatest } from 'redux-saga/effects';

import { LOGIN_ASYNC, CURRENT_USER } from './authActionTypes';
import authActions from './authActions';
import authRequests from './authRequests';
import { getUserProfileFromToken, setUpToken, cleanUpToken } from '../../services/auth';
import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';
import { changeLanguage } from '../../services/i18n';

function* loginUser(action) {
  const handleResponse = responseBody => {
    const userProfile = getUserProfileFromToken(responseBody.authToken);

    setUpToken(responseBody.authToken);
    changeLanguage(userProfile.language);

    return userProfile;
  };

  if (action.payload.isReLogin) {
    yield call(restApiWorkerSaga, authRequests.requestReLogin, action.payload, authActions.login, {
      handleResponse
    });

    return;
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
