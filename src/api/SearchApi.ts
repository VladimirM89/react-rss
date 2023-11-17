import axios from 'axios';
import { BASE_URL } from '../constants/stringConstants';
import {
  CharacterResponseInterface,
  SearchResponseInterface,
} from '../interfaces/SearchResponseInterfaces';
import { SearchParams } from '../interfaces/ParamsInterfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { customCreateSearchParams } from '../utils/queryParams';

export const searchApiAxios = axios.create({
  baseURL: BASE_URL,
});

// export async function getCharacters(
//   params: SearchParams | null = null
// ): Promise<SearchResponseInterface> {
//   const checkedParams: SearchParams = {};

//   if (params) {
//     if (params.q) checkedParams.q = params.q;
//     if (params.page) checkedParams.page = params.page;
//     if (params.limit) checkedParams.limit = params.limit;
//   }
//   const response = await searchApiAxios.get<SearchResponseInterface>('', {
//     params: checkedParams,
//   });

//   return response.data;
// }

// export async function getOneCharacter(id: number): Promise<CharacterInterface> {
//   const response = await searchApiAxios.get<CharacterResponseInterface>(`${id}`);

//   return response.data.data;
// }

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<SearchResponseInterface, SearchParams | void>({
      query: (params?) => {
        const editedQueryParams = customCreateSearchParams({
          q: params?.q,
          page: params?.page !== '1' ? params?.page : '',
          limit: params?.limit !== '25' ? params?.limit : '',
        });
        if (!!!editedQueryParams) {
          return '';
        } else {
          return {
            url: ``,
            params: editedQueryParams,
          };
        }
      },
    }),
    getCharacterById: builder.query<CharacterResponseInterface, number>({
      query: (id) => `/${id}`,
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = searchApi;
