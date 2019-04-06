import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';
import { BASE_URL } from '../config/baseApiUrl';

const api = restful(BASE_URL, fetchBackend(fetch));

export default api;
