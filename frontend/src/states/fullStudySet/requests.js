import api from '../../services/restClient';
import { USERS_RESOURCE_NAME, STUDY_SETS_RESOURCE_NAME } from '../../config/baseApiUrl';

const fetch = ({ userId, studySetId }) =>
  api
    .one(USERS_RESOURCE_NAME, userId)
    .one(STUDY_SETS_RESOURCE_NAME, studySetId)
    .get();

export default { fetch };
