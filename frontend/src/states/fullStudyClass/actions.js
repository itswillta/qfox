import { createAsyncActions } from '../../utils/redux/utilityFunctions';
import {
  FETCH_STUDY_CLASS_ASYNC,
  REMOVE_STUDY_SETS_ASYNC,
  ADD_STUDY_SET_ASYNC
} from './actionTypes';

const fetchStudyClass = createAsyncActions(FETCH_STUDY_CLASS_ASYNC);

const removeStudySets = createAsyncActions(REMOVE_STUDY_SETS_ASYNC);

const addStudySet = createAsyncActions(ADD_STUDY_SET_ASYNC);

export default { fetchStudyClass, removeStudySets, addStudySet };
