import axios from 'axios';
import { BASE_URL } from '../constants/stringConstants';
import { CharacterInterface, SearchResponseInterface } from '../interfaces/SearchResponse';
import getAllCharacterIds from '../utils/queryParams';

export const searchApiAxios = axios.create({
  baseURL: BASE_URL,
});

interface SearchParams {
  name?: string;
  page?: number;
}

export async function getCharacters(
  params: SearchParams | null = null
): Promise<SearchResponseInterface> {
  const response = await searchApiAxios.get<SearchResponseInterface>('', {
    params,
  });

  if ((params && params.name) || (params && params.page)) {
    return response.data;
  } else {
    const charactersCount = response.data.info.count;

    const stringOfIds = getAllCharacterIds(charactersCount);

    const allChars = await searchApiAxios.get<Array<CharacterInterface>>(`${stringOfIds}`);

    return { info: response.data.info, results: allChars.data };
  }
}
