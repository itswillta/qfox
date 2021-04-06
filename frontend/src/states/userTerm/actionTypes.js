import { createAsyncTypes } from '../../utils/redux/utilityFunctions';

const UPDATE_USER_TERM = createAsyncTypes('UPDATE_USER_TERM');

const FETCH_USER_TERM_ASYNC = createAsyncTypes('FETCH_USER_TERM');

export { UPDATE_USER_TERM, FETCH_USER_TERM_ASYNC };
