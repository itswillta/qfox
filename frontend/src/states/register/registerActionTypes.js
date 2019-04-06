import { createAsyncTypes } from '../../utils/redux/utilityFunctions';

const REGISTER_ASYNC = createAsyncTypes('REGISTER');
const REGISTER_FORM = { RESET: 'REGISTER_FORM_RESET' };

export { REGISTER_ASYNC, REGISTER_FORM };
