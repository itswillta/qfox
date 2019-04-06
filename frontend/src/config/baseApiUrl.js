/* eslint-disable import/prefer-default-export */
const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost/api';
  }

  return '';
};

export const BASE_URL = getBaseUrl();
