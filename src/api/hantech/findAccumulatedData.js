import { axiosGET } from 'api/commonAxios/commonAxios';

export const findAccumulatedData = ({ region }) => axiosGET('/data/accumulate', { region: region });
