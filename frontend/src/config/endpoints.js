const ROOT_API_ENDPOINT = 'http://localhost:80/api';

const AUTH_API_ENDPOINT = `${ROOT_API_ENDPOINT}/auth`;

const LOGIN = `${AUTH_API_ENDPOINT}/login`;
const REGISTER = `${AUTH_API_ENDPOINT}/register`;

export default {
  LOGIN,
  REGISTER
};
