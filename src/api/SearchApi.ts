import axios from 'axios';
import { BASE_URL } from '../constants/stringConstants';
import {
  CharacterInterface,
  CharacterResponseInterface,
  SearchResponseInterface,
} from '../interfaces/SearchResponseInterfaces';
import { SearchParams } from '../interfaces/ParamsInterfaces';

export const searchApiAxios = axios.create({
  baseURL: BASE_URL,
});

export async function getCharacters(
  params: SearchParams | null = null
): Promise<SearchResponseInterface> {
  const checkedParams: SearchParams = {};

  if (params) {
    if (params.q) checkedParams.q = params.q;
    if (params.page) checkedParams.page = params.page;
    if (params.limit) checkedParams.limit = params.limit;
  }
  const response = await searchApiAxios.get<SearchResponseInterface>('', {
    params: checkedParams,
  });

  return response.data;
}

export async function getOneCharacter(id: number): Promise<CharacterInterface> {
  const response = await searchApiAxios.get<CharacterResponseInterface>(`${id}`);

  return response.data.data;
}
