import { createAsyncTypes } from '../../utils/redux/utilityFunctions';

const LOGIN_ASYNC = createAsyncTypes('LOGIN');
const LOGIN_FORM = { RESET: 'LOGIN_FORM_RESET' };
const CURRENT_USER = { SET: 'SET_CURRENT_USER', LOGOUT: 'LOGOUT_CURRENT_USER' };

export { LOGIN_ASYNC, LOGIN_FORM, CURRENT_USER };
