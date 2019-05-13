import {
  FETCH_STUDY_CLASS_ASYNC,
  REMOVE_STUDY_SETS_ASYNC,
  ADD_STUDY_SET_ASYNC
} from './actionTypes';
import { updateObject, createReducer } from '../../utils/redux/utilityFunctions';

const handleFetchStudyClassRequest = state =>
  updateObject(state, {
    error: {},
    isLoading: true
  });

const handleFetchStudyClassSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  error: {},
  studyClass: action.payload
});

const handleFetchStudyClassError = (state, action) =>
  updateObject(state, {
    error: action.payload,
    isLoading: false
  });

const handleRemoveStudySetRequest = state => ({
  ...state,
  removeStudySetStatus: {
    isLoading: true,
    error: {}
  }
});

const handleRemoveStudySetSuccess = state => ({
  ...state,
  removeStudySetStatus: {
    isLoading: false,
    error: {}
  }
});

const handleRemoveStudySetError = (state, action) => ({
  ...state,
  removeStudySetStatus: {
    isLoading: false,
    error: action.payload
  }
});

const handleAddStudySetRequest = state => ({
  ...state,
  addStudySetStatus: {
    isLoading: true,
    error: {}
  }
});

const handleAddStudySetSuccess = state => ({
  ...state,
  addStudySetStatus: {
    isLoading: false,
    error: {}
  }
});

const handleAddStudySetError = (state, action) => ({
  ...state,
  addStudySetStatus: {
    isLoading: false,
    error: action.payload
  }
});

const initialState = {
  isLoading: false,
  error: {},
  studyClass: {},
  removeStudySetStatus: {
    isLoading: false,
    error: {}
  },
  addStudySetStatus: {
    isLoading: false,
    error: {}
  },
  updateStatus: {
    isLoading: false,
    error: {}
  }
};

const fullStudyClassAsyncStatusReducer = createReducer(initialState, {
  [FETCH_STUDY_CLASS_ASYNC.PENDING]: handleFetchStudyClassRequest,
  [FETCH_STUDY_CLASS_ASYNC.SUCCESS]: handleFetchStudyClassSuccess,
  [FETCH_STUDY_CLASS_ASYNC.ERROR]: handleFetchStudyClassError,
  [REMOVE_STUDY_SETS_ASYNC.PENDING]: handleRemoveStudySetRequest,
  [REMOVE_STUDY_SETS_ASYNC.SUCCESS]: handleRemoveStudySetSuccess,
  [REMOVE_STUDY_SETS_ASYNC.ERROR]: handleRemoveStudySetError,
  [ADD_STUDY_SET_ASYNC.PENDING]: handleAddStudySetRequest,
  [ADD_STUDY_SET_ASYNC.SUCCESS]: handleAddStudySetSuccess,
  [ADD_STUDY_SET_ASYNC.ERROR]: handleAddStudySetError
});

export default fullStudyClassAsyncStatusReducer;
