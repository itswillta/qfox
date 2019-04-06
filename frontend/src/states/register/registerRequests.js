import api from '../../services/restClient';

const requestRegister = registerData => api.custom('auth/register').post(registerData);

export default { requestRegister };
