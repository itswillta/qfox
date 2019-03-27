import isEmpty from 'lodash/isEmpty';

import { LOGIN_ASYNC, LOGIN_FORM, CURRENT_USER } from './authActionTypes';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  userProfile: {},
  error: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ASYNC.PENDING:
      return {
        ...state,
        error: {},
        isLoading: true,
        loginData: action.payload
      };
    case LOGIN_ASYNC.SUCCESS:
      return {
        isLoading: false,
        isAuthenticated: !isEmpty(action.payload),
        userProfile: action.payload,
        error: {}
      };
    case LOGIN_ASYNC.ERROR:
      return {
        ...state,
        error: {
          message: action.payload.response.data.error.message,
          ...action.payload.response.data.error.details
        },
        isLoading: false
      };
    case LOGIN_FORM.RESET:
      return {
        ...state,
        error: {}
      };
    case CURRENT_USER.SET:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userProfile: action.payload,
        error: {}
      };
    case CURRENT_USER.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userProfile: {},
        error: {}
      };
    default:
      return state;
  }
};

export default authReducer;
