import api from '../../services/restClient';
import {
  USERS_RESOURCE_NAME,
  TERMS_RESOURCE_NAME
} from '../../config/baseApiUrl';

const update = ({ userId, termId, updateFields }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(TERMS_RESOURCE_NAME, termId)
    .put(updateFields);

const fetch = ({ userId }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one('terms', '')
    .get();

export default { update, fetch };
