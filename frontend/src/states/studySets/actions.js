import { createAsyncActions } from '../../utils/redux/utilityFunctions';
import { FETCH_STUDY_SETS_ASYNC } from './actionTypes';

const fetch = createAsyncActions(FETCH_STUDY_SETS_ASYNC);

export default { fetch };
