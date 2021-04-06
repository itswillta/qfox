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

const update = ({ userId, studySetId, updateFields }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(STUDY_SETS_RESOURCE_NAME, studySetId)
    .put(updateFields);

const deleteForever = ({ userId, studySetId }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(STUDY_SETS_RESOURCE_NAME, studySetId)
    .delete();

export default { fetch, create, update, deleteForever };
