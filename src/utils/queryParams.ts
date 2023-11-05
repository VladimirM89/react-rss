import { SearchParams } from '../interfaces/ParamsInterfaces';

export const createSearchParams = (params: SearchParams) => {
  const newParams: { q?: string; page?: string; limit?: string } = {};
  if (params.q) {
    newParams.q = params.q;
  }
  if (params.page) {
    newParams.page = params.page.toString();
  }
  if (params.limit) {
    newParams.limit = params.limit.toString();
    if (params.limit < 10) {
      newParams.limit = '10';
      return newParams;
    }
    if (params.limit > 10 && params.limit < 15) {
      newParams.limit = '15';
      return newParams;
    }
    if (params.limit > 15 && params.limit < 20) {
      newParams.limit = '20';
      return newParams;
    }
    if ((params.limit > 20 && params.limit < 25) || params.limit > 25) {
      newParams.limit = '25';
      return newParams;
    }
  }
  return newParams;
};
