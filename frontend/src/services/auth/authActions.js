import createAction from '../../utils/redux/createAction';
import { LOGIN_ASYNC, LOGIN_FORM, CURRENT_USER } from './authActionTypes';

const login = {
  pending: loginData => createAction(LOGIN_ASYNC.PENDING, loginData),
  success: userProfile => createAction(LOGIN_ASYNC.SUCCESS, userProfile),
  error: error => createAction(LOGIN_ASYNC.ERROR, error)
};

const loginForm = {
  reset: () => createAction(LOGIN_FORM.RESET)
};

const currentUser = {
  set: userProfile => createAction(CURRENT_USER.SET, userProfile),
  logout: () => createAction(CURRENT_USER.LOGOUT)
};

export default { login, loginForm, currentUser };
