import axios from 'axios';

import API_ENDPOINTS from '../../config/endpoints';

const requestRegister = registerData =>
  axios.post(API_ENDPOINTS.REGISTER, registerData);

export default { requestRegister };
