import { createAsyncActions } from '../../utils/redux/utilityFunctions';
import { UPDATE_USER_TERM, FETCH_USER_TERM_ASYNC } from './actionTypes';

const updateUserTerm = createAsyncActions(UPDATE_USER_TERM);
const fetchUserTerm = createAsyncActions(FETCH_USER_TERM_ASYNC);

export default { updateUserTerm, fetchUserTerm };
