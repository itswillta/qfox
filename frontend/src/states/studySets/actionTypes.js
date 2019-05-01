import { createAsyncTypes } from '../../utils/redux/utilityFunctions';

const FETCH_STUDY_SETS_ASYNC = createAsyncTypes('FETCH_STUDY_SETS');
const CREATE_STUDY_SET_ASYNC = createAsyncTypes('CREATE_STUDY_SET');

export { FETCH_STUDY_SETS_ASYNC, CREATE_STUDY_SET_ASYNC };
