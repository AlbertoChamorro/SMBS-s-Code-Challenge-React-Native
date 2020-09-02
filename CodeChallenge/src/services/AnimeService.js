import baseService from './BaseService';

const AnimeService = {};

AnimeService.getAnimes = async (search) => {
  const params = { search };
  return await baseService.getAll('/anime', params);
};

AnimeService.getAnime = async (id) => {
  return await baseService.detail(`/anime/${id}`);
};

export default AnimeService;
