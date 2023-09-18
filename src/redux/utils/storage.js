import axios from 'axios';
import { TOKEN_KEY } from './constants';

const localStorage = {
  setItem: (key, value) => {
    const object = { value, timestamp: new Date().getTime() };
    return window.localStorage.setItem(key, JSON.stringify(object));
  },
  getItem: key => JSON.parse(window.localStorage.getItem(key)),
};

export const setDefaultJWT = jwt => {
  localStorage.setItem(TOKEN_KEY, jwt);
  axios.defaults.headers.common = {'Authorization': `Bearer ${jwt}`}
};

export const removeDefaultJWT = () => window.localStorage.removeItem(TOKEN_KEY);

export const getJWTToken = () => localStorage.getItem(TOKEN_KEY);

// set redirect url
export const setRedirectUrl = (url) => window.localStorage.setItem("redirect_url", url);

export const getRedirectUrl = () => window.localStorage.getItem("redirect_url");

export const removeRedirectUrl = () => window.localStorage.removeItem("redirect_url");
