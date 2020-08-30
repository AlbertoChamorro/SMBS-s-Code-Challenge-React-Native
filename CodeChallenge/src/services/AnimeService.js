import baseService from './BaseService';

const AnimeService = {};

AnimeService.getAnimes = async (search) => {
  const params = {search};
  return await baseService.getAll('/anime', params);
};

export default AnimeService;
