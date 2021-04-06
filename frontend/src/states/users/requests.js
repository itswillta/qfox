import api from '../../services/restClient';
import { USERS_RESOURCE_NAME } from '../../config/baseApiUrl';

const update = ({ userId, updateFields }) =>
  api.one(USERS_RESOURCE_NAME, userId).put(updateFields);

export default { update };
