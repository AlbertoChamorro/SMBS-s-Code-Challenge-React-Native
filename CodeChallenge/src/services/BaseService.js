import httpManagerService from './InterceptorService';

const getAll = async (url, params) => {
  var queryStrings = '';
  if (params.search) {
    queryStrings = `?filter[text]=${params.search}`;
  }

  return await httpManagerService.get(`${url}${queryStrings}`);
};

const detail = async (url) => {
  return await httpManagerService.get(url);
};

export default {
  getAll,
  detail,
};
