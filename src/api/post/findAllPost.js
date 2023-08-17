import { axiosGET } from 'api/commonAxios/commonAxios';

export const findAllPost = () => axiosGET('/post');
