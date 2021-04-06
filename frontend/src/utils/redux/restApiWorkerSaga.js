/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import { openSnackbar } from '../../components/Notification';
import { API_REQUEST_MESSAGES } from '../../config/userMessages';

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
    let reduxErrorObject;

    if (error.response) {
      openSnackbar(error.response.data.error.message);
      reduxErrorObject = error.response.data.error.details;
    } else {
      console.error(error);
      openSnackbar(API_REQUEST_MESSAGES.UNEXPECTED_ERROR);
      reduxErrorObject = {
        name: error.name,
        message: error.message
      };
    }

    yield put(asyncAction.error(reduxErrorObject));
  }
}

export default restApiWorkerSaga;
