import api from '../../services/restClient';

const requestLogin = loginData => api.custom('auth/login').post(loginData);

const requestReLogin = () => api.custom('auth/re-login').post();

export default { requestLogin, requestReLogin };
