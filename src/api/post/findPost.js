import { axiosGET } from 'api/commonAxios/commonAxios';

export const findPost = (req) => axiosGET('/post/find', req);
