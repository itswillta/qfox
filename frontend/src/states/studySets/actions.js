import { createAsyncActions } from '../../utils/redux/utilityFunctions';
import { FETCH_STUDY_SETS_ASYNC, CREATE_STUDY_SET_ASYNC } from './actionTypes';

const fetch = createAsyncActions(FETCH_STUDY_SETS_ASYNC);

const create = createAsyncActions(CREATE_STUDY_SET_ASYNC);

export default { fetch, create };
