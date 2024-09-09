import {Banners} from '@models/banner';
import http from '@utils/http';

export const getBannerHome = (signal?: AbortSignal) =>
  http.get<Banners[]>('bannerHome', {
    signal,
  });
