import axios from 'axios';
import {constants} from '@app/config/constants';
export const TIMEOUT_TIME = 10000;

const request = axios.create({
  baseURL: constants.APIURL,
  timeout: TIMEOUT_TIME,
});

request.interceptors.request.use(async config => {
  config.headers.Accept = 'application/json';
  return config;
});

export default request;
