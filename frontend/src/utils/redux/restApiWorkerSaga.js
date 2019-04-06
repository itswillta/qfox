import { call, put } from 'redux-saga/effects';
import { openSnackbar } from '../../components/Notification';

function* restApiWorkerSaga(request, payload, asyncAction, callbackObject) {
  try {
    const response = yield call(request, payload);

    if (typeof callbackObject.handleResponse === 'function') {
      const successPayload = yield call(callbackObject.handleResponse, response.body().data());
      yield put(asyncAction.success(successPayload));
    } else {
      yield put(asyncAction.success());
    }

    if (typeof callbackObject.afterSuccess === 'function') {
      yield call(callbackObject.afterSuccess);
    }
  } catch (error) {
    openSnackbar(error.response.data.error.message);
    yield put(asyncAction.error(error));
  }
}

export default restApiWorkerSaga;
