import axios from 'axios';

const searchApiAxios = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character/',
  timeout: 1000,
});

export default searchApiAxios;
