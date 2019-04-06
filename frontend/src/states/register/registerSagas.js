import { call, put, takeLatest } from 'redux-saga/effects';

import { REGISTER_ASYNC } from './registerActionTypes';
import registerActions from './registerActions';
import registerRequests from './registerRequests';

import authActions from '../auth/authActions';

import { openSnackbar } from '../../components/Notification';
import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';

function* registerUser(action) {
  yield call(
    restApiWorkerSaga,
    registerRequests.requestRegister,
    action.payload,
    registerActions.register,
    {
      afterSuccess: function* afterSuccess() {
        openSnackbar('Registered successfully. Welcome to QFox.');
        yield put(authActions.login.pending(action.payload));
      }
    }
  );
}

function* registerWatcherSaga() {
  yield takeLatest(REGISTER_ASYNC.PENDING, registerUser);
}

export default registerWatcherSaga;
