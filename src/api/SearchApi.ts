import axios from 'axios';
import { BASE_URL } from '../constants/stringConstants';
import {
  CharacterInterface,
  CharacterResponseInterface,
  SearchResponseInterface,
} from '../interfaces/SearchResponse';
// import getAllCharacterIds from '../utils/queryParams';

export const searchApiAxios = axios.create({
  baseURL: BASE_URL,
});

interface SearchParams {
  q?: string;
  page?: number;
  limit?: number;
}

export async function getCharacters(
  params: SearchParams | null = null
): Promise<SearchResponseInterface> {
  const response = await searchApiAxios.get<SearchResponseInterface>('', {
    params,
  });

  return response.data;
}

export async function getOneCharacter(id: number): Promise<CharacterInterface> {
  const response = await searchApiAxios.get<CharacterResponseInterface>(`${id}`);

  return response.data.data;
}
