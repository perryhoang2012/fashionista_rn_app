import {Categories} from '@models/category';
import http from '@utils/http';

export const getCategories = (
  page: number | string,
  limit: number | string,
  signal?: AbortSignal,
) =>
  http.get<Categories[]>('categories', {
    params: {
      _page: page,
      _limit: limit,
    },
    signal,
  });
