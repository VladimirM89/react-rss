import { SearchParams } from '../interfaces/ParamsInterfaces';

export const customCreateSearchParams = (params: SearchParams): SearchParams => {
  const newParams: { q?: string; page?: string; limit?: string } = {};
  if (params.q) {
    newParams.q = params.q;
  }
  if (params.page) {
    newParams.page = params.page.toString();
  }
  if (params.limit) {
    newParams.limit = params.limit.toString();
    if (Number(params.limit) < 10) {
      newParams.limit = '10';
      return newParams;
    }
    if (Number(params.limit) > 10 && Number(params.limit) < 15) {
      newParams.limit = '15';
      return newParams;
    }
    if (Number(params.limit) > 15 && Number(params.limit) < 20) {
      newParams.limit = '20';
      return newParams;
    }
    if ((Number(params.limit) > 20 && Number(params.limit) < 25) || Number(params.limit) > 25) {
      newParams.limit = '25';
      return newParams;
    }
  }
  return newParams;
};
