/* eslint-disable no-console */
import { call, put, takeLatest } from 'redux-saga/effects';

import { LOGIN_ASYNC } from './authActionTypes';
import authActions from './authActions';
import authRequests from './authRequests';
import authHelpers from './authHelpers';

function* loginUser(action) {
  try {
    const authResponse = yield call(authRequests.requestLogin, action.payload);

    const userProfile = authHelpers.getUserProfileFromToken(authResponse.data.authToken);
    authHelpers.setUpToken(authResponse.data.authToken);

    yield put(authActions.login.success(userProfile));
  } catch (error) {
    console.error(error);
    yield put(authActions.login.error(error));
  }
}

function* watchLoginUser() {
  yield takeLatest(LOGIN_ASYNC.PENDING, loginUser);
}

export default watchLoginUser;
