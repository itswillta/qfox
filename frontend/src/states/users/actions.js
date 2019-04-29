import { createAsyncActions } from '../../utils/redux/utilityFunctions';
import { UPDATE_USER } from './actionTypes';

const updateUser = createAsyncActions(UPDATE_USER);

export default { updateUser };
