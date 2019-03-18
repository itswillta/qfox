import jwtDecode from 'jwt-decode';

const getUserProfileFromToken = authToken => jwtDecode(authToken).userProfile;

const setUpToken = authToken => {
  localStorage.setItem('authToken', authToken);
};

const cleanUpToken = () => {
  localStorage.removeItem('authToken');
};

const getExistingToken = () => localStorage.getItem('authToken');

export default { getUserProfileFromToken, setUpToken, getExistingToken, cleanUpToken };
