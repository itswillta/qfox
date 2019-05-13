import api from '../../services/restClient';
import {
  USERS_RESOURCE_NAME,
  STUDY_CLASSES_RESOURCE_NAME,
  STUDY_SETS_RESOURCE_NAME
} from '../../config/baseApiUrl';

const fetch = ({ userId, studyClassId }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(STUDY_CLASSES_RESOURCE_NAME, studyClassId)
    .get();

const removeStudySets = ({ userId, studyClassId, studySetIds }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(STUDY_CLASSES_RESOURCE_NAME, studyClassId)
    .all(STUDY_SETS_RESOURCE_NAME)
    .delete('', { studySetIds });

const addStudySet = ({ userId, studyClassId, studySetId }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(STUDY_CLASSES_RESOURCE_NAME, studyClassId)
    .all(STUDY_SETS_RESOURCE_NAME)
    .post({ studySetId });

export default { fetch, removeStudySets, addStudySet };
