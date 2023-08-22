import { axiosGET } from 'api/commonAxios/commonAxios';

export const findRealTimeData = ({ region }) => axiosGET('/data/now', { region: region });
