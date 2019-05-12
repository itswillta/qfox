import { createAsyncActions } from '../../utils/redux/utilityFunctions';
import { FETCH_STUDY_SET_ASYNC } from './actionTypes';

const fetchStudySet = createAsyncActions(FETCH_STUDY_SET_ASYNC);

export default { fetchStudySet };
