import { UPDATE_USER_TERM, FETCH_USER_TERM_ASYNC } from './actionTypes';
import {
  updateObject,
  createReducer
} from '../../utils/redux/utilityFunctions';

const handleUpdateUserTermRequest = (state, action) =>
  updateObject(state, {
    error: {},
    isLoading: true,
    updateData: action.payload
  });

const handleUpdateUserTermSuccess = () => ({
  isLoading: false,
  error: {}
});

const handleUpdateUserTermError = (state, action) =>
  updateObject(state, {
    error: action.payload,
    isLoading: false
  });

const handleFetchUserTermRequest = state =>
  updateObject(state, {
    error: {},
    isLoading: true
  });

const handleFetchUserTermSuccess = (state, action) =>
  updateObject({
    isLoading: false,
    error: {},
    userTerm: action.payload
  });

const handleFetchUserTermError = (state, action) =>
  updateObject(state, {
    error: action.payload,
    isLoading: false
  });

const initialState = {
  isLoading: false,
  error: {},
  userTerm: {}
};

const userTermAsyncStatusReducer = createReducer(initialState, {
  [UPDATE_USER_TERM.PENDING]: handleUpdateUserTermRequest,
  [UPDATE_USER_TERM.SUCCESS]: handleUpdateUserTermSuccess,
  [UPDATE_USER_TERM.ERROR]: handleUpdateUserTermError,
  [FETCH_USER_TERM_ASYNC.PENDING]: handleFetchUserTermRequest,
  [FETCH_USER_TERM_ASYNC.SUCCESS]: handleFetchUserTermSuccess,
  [FETCH_USER_TERM_ASYNC.ERROR]: handleFetchUserTermError
});

export default userTermAsyncStatusReducer;
