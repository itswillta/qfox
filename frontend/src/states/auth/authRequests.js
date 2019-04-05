import axios from 'axios';

import API_ENDPOINTS from '../../config/endpoints';

const requestLogin = loginData => axios.post(API_ENDPOINTS.LOGIN, loginData);

export default { requestLogin };
