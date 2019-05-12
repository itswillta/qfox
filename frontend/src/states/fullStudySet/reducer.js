import { FETCH_STUDY_SET_ASYNC } from './actionTypes';
import { updateObject, createReducer } from '../../utils/redux/utilityFunctions';

const handleFetchStudySetRequest = state =>
  updateObject(state, {
    error: {},
    isLoading: true
  });

const handleFetchStudySetSuccess = (state, action) =>
  updateObject({
    isLoading: false,
    error: {},
    studySet: action.payload
  });

const handleFetchStudySetError = (state, action) =>
  updateObject(state, {
    error: action.payload,
    isLoading: false
  });

const initialState = {
  isLoading: false,
  error: {},
  studySet: {}
};

const userAsyncStatusReducer = createReducer(initialState, {
  [FETCH_STUDY_SET_ASYNC.PENDING]: handleFetchStudySetRequest,
  [FETCH_STUDY_SET_ASYNC.SUCCESS]: handleFetchStudySetSuccess,
  [FETCH_STUDY_SET_ASYNC.ERROR]: handleFetchStudySetError
});

export default userAsyncStatusReducer;
