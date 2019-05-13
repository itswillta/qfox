import { createAsyncActions } from '../../utils/redux/utilityFunctions';
import {
  FETCH_STUDY_CLASSES_ASYNC,
  CREATE_STUDY_CLASS_ASYNC,
  UPDATE_STUDY_CLASS_ASYNC,
  DELETE_STUDY_CLASS_ASYNC
} from './actionTypes';

const fetch = createAsyncActions(FETCH_STUDY_CLASSES_ASYNC);

const create = createAsyncActions(CREATE_STUDY_CLASS_ASYNC);

const update = createAsyncActions(UPDATE_STUDY_CLASS_ASYNC);

const deleteForever = createAsyncActions(DELETE_STUDY_CLASS_ASYNC);

export default { fetch, create, update, deleteForever };
