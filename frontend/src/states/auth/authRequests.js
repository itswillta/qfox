import api from '../../services/restClient';

const requestLogin = loginData => api.custom('auth/login').post(loginData);

export default { requestLogin };
