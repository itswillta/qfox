import isEmpty from 'lodash/isEmpty';

import { LOGIN_ASYNC, LOGIN_FORM, CURRENT_USER } from './authActionTypes';
import { updateObject, createReducer } from '../../utils/redux/utilityFunctions';

const handleLoginRequest = (state, action) =>
  updateObject(state, {
    error: {},
    isLoading: true,
    loginData: action.payload
  });

const handleLoginSuccess = (state, action) => ({
  isLoading: false,
  isAuthenticated: !isEmpty(action.payload),
  userProfile: action.payload,
  error: {}
});

const handleLoginError = (state, action) =>
  updateObject(state, {
    error: action.payload.response.data.error.details,
    isLoading: false
  });

const resetLoginForm = state =>
  updateObject(state, {
    error: {}
  });

const setCurrentUser = (state, action) =>
  updateObject(state, {
    isAuthenticated: !isEmpty(action.payload),
    userProfile: action.payload,
    error: {}
  });

const logout = state =>
  updateObject(state, {
    isAuthenticated: false,
    userProfile: {},
    error: {}
  });

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  userProfile: {},
  error: {}
};

const actionHandlers = {};

actionHandlers[LOGIN_ASYNC.PENDING] = handleLoginRequest;
actionHandlers[LOGIN_ASYNC.SUCCESS] = handleLoginSuccess;
actionHandlers[LOGIN_ASYNC.ERROR] = handleLoginError;
actionHandlers[LOGIN_FORM.RESET] = resetLoginForm;
actionHandlers[CURRENT_USER.SET] = setCurrentUser;
actionHandlers[CURRENT_USER.LOGOUT] = logout;

const authReducer = createReducer(initialState, actionHandlers);

export default authReducer;
