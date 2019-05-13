import { createAsyncTypes } from '../../utils/redux/utilityFunctions';

const FETCH_STUDY_CLASS_ASYNC = createAsyncTypes('FETCH_STUDY_CLASS');
const REMOVE_STUDY_SETS_ASYNC = createAsyncTypes('REMOVE_STUDY_SETS_FROM_CLASS');
const ADD_STUDY_SET_ASYNC = createAsyncTypes('ADD_STUDY_SET_TO_CLASS');

export { FETCH_STUDY_CLASS_ASYNC, REMOVE_STUDY_SETS_ASYNC, ADD_STUDY_SET_ASYNC };
