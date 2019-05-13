import {
  FETCH_STUDY_SETS_ASYNC,
  CREATE_STUDY_SET_ASYNC,
  UPDATE_STUDY_SET_ASYNC,
  DELETE_STUDY_SET_ASYNC
} from './actionTypes';
import { createReducer } from '../../utils/redux/utilityFunctions';
import {
  handleFetchStudySetRequest,
  handleFetchStudySetSuccess,
  handleFetchStudySetError,
  handleCreateStudySetRequest,
  handleCreateStudySetSuccess,
  handleCreateStudySetError,
  handleUpdateStudySetRequest,
  handleUpdateStudySetSuccess,
  handleUpdateStudySetError,
  handleDeleteStudySetRequest,
  handleDeleteStudySetSuccess,
  handleDeleteStudySetError,
  initialAsyncStatus
} from './reducer/asyncStatusActionHandlers';
import { fetchStudySetsToDB, deleteStudySetFromDB } from './reducer/dbActionHandlers';

const studySetAsyncStatusReducer = createReducer(initialAsyncStatus, {
  [FETCH_STUDY_SETS_ASYNC.PENDING]: handleFetchStudySetRequest,
  [FETCH_STUDY_SETS_ASYNC.SUCCESS]: handleFetchStudySetSuccess,
  [FETCH_STUDY_SETS_ASYNC.ERROR]: handleFetchStudySetError,
  [CREATE_STUDY_SET_ASYNC.PENDING]: handleCreateStudySetRequest,
  [CREATE_STUDY_SET_ASYNC.SUCCESS]: handleCreateStudySetSuccess,
  [CREATE_STUDY_SET_ASYNC.ERROR]: handleCreateStudySetError,
  [UPDATE_STUDY_SET_ASYNC.PENDING]: handleUpdateStudySetRequest,
  [UPDATE_STUDY_SET_ASYNC.SUCCESS]: handleUpdateStudySetSuccess,
  [UPDATE_STUDY_SET_ASYNC.ERROR]: handleUpdateStudySetError,
  [DELETE_STUDY_SET_ASYNC.PENDING]: handleDeleteStudySetRequest,
  [DELETE_STUDY_SET_ASYNC.SUCCESS]: handleDeleteStudySetSuccess,
  [DELETE_STUDY_SET_ASYNC.ERROR]: handleDeleteStudySetError
});

const studySetDBActionHandlers = {
  [FETCH_STUDY_SETS_ASYNC.SUCCESS]: fetchStudySetsToDB,
  [DELETE_STUDY_SET_ASYNC.SUCCESS]: deleteStudySetFromDB
};

export { studySetAsyncStatusReducer, studySetDBActionHandlers };
