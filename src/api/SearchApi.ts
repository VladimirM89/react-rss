import axios from 'axios';
import { BASE_URL, SEARCH_TIMEOUT } from '../constants/stringConstants';

const searchApiAxios = axios.create({
  baseURL: BASE_URL,
  timeout: SEARCH_TIMEOUT,
});

export default searchApiAxios;
