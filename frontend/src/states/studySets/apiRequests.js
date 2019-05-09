import api from '../../services/restClient';
import { USERS_RESOURCE_NAME, STUDY_SETS_RESOURCE_NAME } from '../../config/baseApiUrl';

const fetch = userId =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .all(STUDY_SETS_RESOURCE_NAME)
    .getAll();

const create = ({ userId, studySetInfo }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .all(STUDY_SETS_RESOURCE_NAME)
    .post(studySetInfo);

export default { fetch, create };
