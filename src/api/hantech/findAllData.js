import { axiosGET } from 'api/commonAxios/commonAxios';

export const findAllData = () => axiosGET('/child');
