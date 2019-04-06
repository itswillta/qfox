import { createAsyncActions, createAction } from '../../utils/redux/utilityFunctions';
import { REGISTER_ASYNC, REGISTER_FORM } from './registerActionTypes';

const register = createAsyncActions(REGISTER_ASYNC);

const registerForm = {
  reset: () => createAction(REGISTER_FORM.RESET)
};

export default { register, registerForm };
