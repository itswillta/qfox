import { call, takeLatest, put } from 'redux-saga/effects';

import { UPDATE_USER } from './actionTypes';
import userActions from './actions';
import userRequests from './requests';
import { authActions } from '../auth';

import { openSnackbar } from '../../components/Notification';
import restApiWorkerSaga from '../../utils/redux/restApiWorkerSaga';

function* updateUser(action) {
  yield call(
    restApiWorkerSaga,
    userRequests.update,
    action.payload,
    userActions.updateUser,
    {
      afterSuccess: function* afterSuccess() {
        openSnackbar('Your profile has been updated.');
        yield put(
          authActions.login.pending({
            isReLogin: true
          })
        );
      }
    }
  );
}

function* userWatcherSaga() {
  yield takeLatest(UPDATE_USER.PENDING, updateUser);
}

export default userWatcherSaga;
