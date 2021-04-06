/* eslint-disable import/prefer-default-export */
const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost/api';
  }

  return '';
};

export const BASE_URL = getBaseUrl();
export const USERS_RESOURCE_NAME = 'users';
export const STUDY_CLASSES_RESOURCE_NAME = 'classes';
export const STUDY_SETS_RESOURCE_NAME = 'study-sets';
export const TERMS_RESOURCE_NAME = 'terms';
