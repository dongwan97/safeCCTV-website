import { axiosGET } from 'api/commonAxios/commonAxios';

export const findRealTimeData = () => axiosGET('/data/now');
