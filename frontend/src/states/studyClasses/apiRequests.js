import api from '../../services/restClient';
import { USERS_RESOURCE_NAME, STUDY_CLASSES_RESOURCE_NAME } from '../../config/baseApiUrl';

const fetch = userId =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .all(STUDY_CLASSES_RESOURCE_NAME)
    .getAll();

const create = ({ userId, studyClassInfo }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .all(STUDY_CLASSES_RESOURCE_NAME)
    .post(studyClassInfo);

const update = ({ userId, studyClassId, updateFields }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(STUDY_CLASSES_RESOURCE_NAME, studyClassId)
    .put(updateFields);

const deleteForever = ({ userId, studyClassId }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(STUDY_CLASSES_RESOURCE_NAME, studyClassId)
    .delete();

export default { fetch, create, update, deleteForever };
