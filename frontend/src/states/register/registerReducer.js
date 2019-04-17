import { REGISTER_ASYNC, REGISTER_FORM } from './registerActionTypes';
import { updateObject, createReducer } from '../../utils/redux/utilityFunctions';

const handleRegisterRequest = (state, action) =>
  updateObject(state, {
    error: {},
    isLoading: true,
    registerData: action.payload
  });

const handleRegisterSuccess = () => ({
  isLoading: false,
  error: {}
});

const handleRegisterError = (state, action) =>
  updateObject(state, {
    error: action.payload,
    isLoading: false
  });

const resetRegisterForm = state =>
  updateObject(state, {
    error: {}
  });

const initialState = {
  isLoading: false,
  error: {}
};

const registerReducer = createReducer(initialState, {
  [REGISTER_ASYNC.PENDING]: handleRegisterRequest,
  [REGISTER_ASYNC.SUCCESS]: handleRegisterSuccess,
  [REGISTER_ASYNC.ERROR]: handleRegisterError,
  [REGISTER_FORM.RESET]: resetRegisterForm
});

export default registerReducer;
