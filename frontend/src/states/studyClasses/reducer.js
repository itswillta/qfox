import {
  FETCH_STUDY_CLASSES_ASYNC,
  CREATE_STUDY_CLASS_ASYNC,
  UPDATE_STUDY_CLASS_ASYNC,
  DELETE_STUDY_CLASS_ASYNC
} from './actionTypes';
import { createReducer } from '../../utils/redux/utilityFunctions';
import {
  handleFetchStudyClassRequest,
  handleFetchStudyClassSuccess,
  handleFetchStudyClassError,
  handleCreateStudyClassRequest,
  handleCreateStudyClassSuccess,
  handleCreateStudyClassError,
  handleUpdateStudyClassRequest,
  handleUpdateStudyClassSuccess,
  handleUpdateStudyClassError,
  handleDeleteStudyClassRequest,
  handleDeleteStudyClassSuccess,
  handleDeleteStudyClassError,
  initialAsyncStatus
} from './reducer/asyncStatusActionHandlers';
import { fetchStudyClassesToDB, deleteStudyClassFromDB } from './reducer/dbActionHandlers';

const studyClassAsyncStatusReducer = createReducer(initialAsyncStatus, {
  [FETCH_STUDY_CLASSES_ASYNC.PENDING]: handleFetchStudyClassRequest,
  [FETCH_STUDY_CLASSES_ASYNC.SUCCESS]: handleFetchStudyClassSuccess,
  [FETCH_STUDY_CLASSES_ASYNC.ERROR]: handleFetchStudyClassError,
  [CREATE_STUDY_CLASS_ASYNC.PENDING]: handleCreateStudyClassRequest,
  [CREATE_STUDY_CLASS_ASYNC.SUCCESS]: handleCreateStudyClassSuccess,
  [CREATE_STUDY_CLASS_ASYNC.ERROR]: handleCreateStudyClassError,
  [UPDATE_STUDY_CLASS_ASYNC.PENDING]: handleUpdateStudyClassRequest,
  [UPDATE_STUDY_CLASS_ASYNC.SUCCESS]: handleUpdateStudyClassSuccess,
  [UPDATE_STUDY_CLASS_ASYNC.ERROR]: handleUpdateStudyClassError,
  [DELETE_STUDY_CLASS_ASYNC.PENDING]: handleDeleteStudyClassRequest,
  [DELETE_STUDY_CLASS_ASYNC.SUCCESS]: handleDeleteStudyClassSuccess,
  [DELETE_STUDY_CLASS_ASYNC.ERROR]: handleDeleteStudyClassError
});

const studyClassDBActionHandlers = {
  [FETCH_STUDY_CLASSES_ASYNC.SUCCESS]: fetchStudyClassesToDB,
  [DELETE_STUDY_CLASS_ASYNC.SUCCESS]: deleteStudyClassFromDB
};

export { studyClassAsyncStatusReducer, studyClassDBActionHandlers };
