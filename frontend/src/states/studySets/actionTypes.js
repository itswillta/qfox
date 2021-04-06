import { createAsyncTypes } from '../../utils/redux/utilityFunctions';

const FETCH_STUDY_SETS_ASYNC = createAsyncTypes('FETCH_STUDY_SETS');
const CREATE_STUDY_SET_ASYNC = createAsyncTypes('CREATE_STUDY_SET');
const UPDATE_STUDY_SET_ASYNC = createAsyncTypes('UPDATE_STUDY_SET');
const DELETE_STUDY_SET_ASYNC = createAsyncTypes('DELETE_STUDY_SET');

export {
  FETCH_STUDY_SETS_ASYNC,
  CREATE_STUDY_SET_ASYNC,
  UPDATE_STUDY_SET_ASYNC,
  DELETE_STUDY_SET_ASYNC
};
