import { axiosGET } from 'api/commonAxios/commonAxios';

export const checkComment = () => axiosGET('/comment/check');
