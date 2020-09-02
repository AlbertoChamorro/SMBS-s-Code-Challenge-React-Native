import baseService from './BaseService';

const AnimeService = {};

AnimeService.getAnimes = async (search) => {
  const params = { search };
  return await baseService.getAll('/anime', params);
};

AnimeService.getAnime = async (id) => {
  return await baseService.detail(`/anime/${id}`);
};

AnimeService.getGenresByAnime = async (id) => {
  return await baseService.detail(`/anime/${id}/genres`);
};

AnimeService.getEpisodesByAnime = async (id) => {
  return await baseService.detail(`/anime/${id}/episodes`);
};

export default AnimeService;
