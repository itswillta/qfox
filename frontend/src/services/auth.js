import jwtDecode from 'jwt-decode';
import authActions from '../states/auth/authActions';
import { saveItemToStorage, getItemFromStorage, removeItemFromStorage } from './storage';
import api from './restClient';

const TOKEN_STORE_KEY = 'authToken';

const getUserProfileFromToken = authToken => jwtDecode(authToken).userProfile;

const setUpToken = authToken => {
  saveItemToStorage(TOKEN_STORE_KEY, authToken);
  api.header('Authorization', `Bearer ${authToken}`);
};

const cleanUpToken = () => {
  removeItemFromStorage(TOKEN_STORE_KEY);
  api.header('Authorization', '');
};

const getExistingToken = () => getItemFromStorage(TOKEN_STORE_KEY);

const isTokenExpired = authToken => Date.now() / 1000 > jwtDecode(authToken).exp;

const authenticateOnPageLoad = store => {
  const authToken = getExistingToken();

  if (authToken) {
    if (isTokenExpired(authToken)) {
      return cleanUpToken();
    }

    setUpToken(authToken);
    return store.dispatch(authActions.currentUser.set(getUserProfileFromToken(authToken)));
  }

  return false;
};

export {
  getUserProfileFromToken,
  setUpToken,
  getExistingToken,
  cleanUpToken,
  authenticateOnPageLoad,
  isTokenExpired
};
