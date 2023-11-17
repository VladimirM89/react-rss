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

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<SearchResponseInterface, SearchParams | void>({
      query: (params?) => {
        const editedQueryParams = customCreateSearchParams({
          q: params?.q,
          page: params?.page,
          limit: params?.limit,
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
