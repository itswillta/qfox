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
    error: action.payload,
    isLoading: false
  });

const resetLoginForm = state =>
  updateObject(state, {
    error: {},
    isLoading: false
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

const authReducer = createReducer(initialState, {
  [LOGIN_ASYNC.PENDING]: handleLoginRequest,
  [LOGIN_ASYNC.SUCCESS]: handleLoginSuccess,
  [LOGIN_ASYNC.ERROR]: handleLoginError,
  [LOGIN_FORM.RESET]: resetLoginForm,
  [CURRENT_USER.SET]: setCurrentUser,
  [CURRENT_USER.LOGOUT]: logout
});

export default authReducer;
