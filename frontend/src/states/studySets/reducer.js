import { FETCH_STUDY_SETS_ASYNC } from './actionTypes';
import { createReducer } from '../../utils/redux/utilityFunctions';
import { initialDBState } from '../orm';
import {
  handleFetchStudySetRequest,
  handleFetchStudySetSuccess,
  handleFetchStudySetError,
  initialAsyncStatus
} from './reducer/asyncStatusActionHandlers';
import { fetchStudySetsToDB } from './reducer/dbActionHandlers';

const studySetAsyncStatusReducer = createReducer(initialAsyncStatus, {
  [FETCH_STUDY_SETS_ASYNC.PENDING]: handleFetchStudySetRequest,
  [FETCH_STUDY_SETS_ASYNC.SUCCESS]: handleFetchStudySetSuccess,
  [FETCH_STUDY_SETS_ASYNC.ERROR]: handleFetchStudySetError
});

const studySetDBReducer = createReducer(initialDBState, {
  [FETCH_STUDY_SETS_ASYNC.SUCCESS]: fetchStudySetsToDB
});

export { studySetAsyncStatusReducer, studySetDBReducer };
