import { createAsyncActions, createAction } from '../../utils/redux/utilityFunctions';
import { LOGIN_ASYNC, LOGIN_FORM, CURRENT_USER } from './authActionTypes';

const login = createAsyncActions(LOGIN_ASYNC);

const loginForm = {
  reset: () => createAction(LOGIN_FORM.RESET)
};

const currentUser = {
  set: userProfile => createAction(CURRENT_USER.SET, userProfile),
  logout: () => createAction(CURRENT_USER.LOGOUT)
};

export default { login, loginForm, currentUser };
