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
    error: action.payload.response.data.error.details,
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

const actionHandlers = {};

actionHandlers[REGISTER_ASYNC.PENDING] = handleRegisterRequest;
actionHandlers[REGISTER_ASYNC.SUCCESS] = handleRegisterSuccess;
actionHandlers[REGISTER_ASYNC.ERROR] = handleRegisterError;
actionHandlers[REGISTER_FORM.RESET] = resetRegisterForm;

const registerReducer = createReducer(initialState, actionHandlers);

export default registerReducer;
