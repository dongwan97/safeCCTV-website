import { axiosGET } from 'api/commonAxios/commonAxios';

export const checkPost = (req) => axiosGET('/post/check/', req);
