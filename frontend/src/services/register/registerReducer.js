import { REGISTER_ASYNC, REGISTER_FORM } from './registerActionTypes';

const initialState = {
  isLoading: false,
  error: {}
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ASYNC.PENDING:
      return {
        ...state,
        error: {},
        isLoading: true,
        registerData: action.payload
      };
    case REGISTER_ASYNC.SUCCESS:
      return {
        isLoading: false,
        error: {}
      };
    case REGISTER_ASYNC.ERROR:
      return {
        ...state,
        error: action.payload.response.data.error.details,
        isLoading: false
      };
    case REGISTER_FORM.RESET:
      return {
        ...state,
        error: {}
      };
    default:
      return state;
  }
};

export default registerReducer;
