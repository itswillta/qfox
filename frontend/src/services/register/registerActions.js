import createAction from '../../utils/redux/createAction';
import { REGISTER_ASYNC, REGISTER_FORM } from './registerActionTypes';

const register = {
  pending: registerData => createAction(REGISTER_ASYNC.PENDING, registerData),
  success: () => createAction(REGISTER_ASYNC.SUCCESS),
  error: error => createAction(REGISTER_ASYNC.ERROR, error)
};

const registerForm = {
  reset: () => createAction(REGISTER_FORM.RESET)
};

export default { register, registerForm };
