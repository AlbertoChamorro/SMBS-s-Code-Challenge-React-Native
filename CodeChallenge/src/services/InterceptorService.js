import http from 'axios';
import appConfig from './ApiConfig';

const httpManagerService = http.create({
  baseURL: appConfig.API_URL,
});

const responseMiddleware = (res) => {
  // console.log('interceptor success -> ', res);
  return res.data.data;
};

const rejectMiddleware = (err) => {
  // console.log('interceptor error -> ', err);
  return Promise.reject(err);
};

httpManagerService.interceptors.response.use(
  responseMiddleware,
  rejectMiddleware,
);

export default httpManagerService;
