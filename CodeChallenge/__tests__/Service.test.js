/**
 * @format
 */
import animeService from '../src/services/AnimeService';

describe('animeService', () => {
  test('testing params search', async () => {
    let search = null;
    let results = await animeService.getAnimes(search);
    expect(Array.isArray(results)).toBeTruthy();
    expect(results.length > 0).toBeTruthy();
    for (const index in results) {
      expect(results[index].type).toMatch(/anime/);
    }

    search = '';
    results = await animeService.getAnimes(search);
    expect(Array.isArray(results)).toBeTruthy();
    expect(results.length > 0).toBeTruthy();
    for (const index in results) {
      expect(results[index].type).toMatch(/anime/);
    }
  });

  test('testing scenaries emptys', async () => {
    let search = 'fizzbuzz';
    let results = await animeService.getAnimes(search);
    expect(Array.isArray(results)).toBeTruthy();
    expect(results.length > 0).not.toBeTruthy();
  });

  test('testing scenaries with data', async () => {
    let search = 'cowboy bebop';
    let results = await animeService.getAnimes(search);
    expect(Array.isArray(results)).toBeTruthy();
    expect(results.length > 0).toBeTruthy();

    for (const index in results) {
      expect(results[index].type).toMatch(/anime/);
      expect(results[index].attributes).not.toBeNull();
      // expect(results[index].attributes.canonicalTitle.toLowerCase()).toMatch(/cowboy|bebop/);
    }
  });
});
