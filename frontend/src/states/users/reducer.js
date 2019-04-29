import { UPDATE_USER } from './actionTypes';
import {
  updateObject,
  createReducer
} from '../../utils/redux/utilityFunctions';

const handleUpdateUserRequest = (state, action) =>
  updateObject(state, {
    error: {},
    isLoading: true,
    updateData: action.payload
  });

const handleUpdateUserSuccess = () => ({
  isLoading: false,
  error: {}
});

const handleUpdateUserError = (state, action) =>
  updateObject(state, {
    error: action.payload,
    isLoading: false
  });

const initialState = {
  isLoading: false,
  error: {}
};

const userAsyncStatusReducer = createReducer(initialState, {
  [UPDATE_USER.PENDING]: handleUpdateUserRequest,
  [UPDATE_USER.SUCCESS]: handleUpdateUserSuccess,
  [UPDATE_USER.ERROR]: handleUpdateUserError
});

export default userAsyncStatusReducer;
