import { axiosGET } from 'api/commonAxios/commonAxios';

export const nowTotal = ({ region }) => axiosGET('/data/nowTotal', { region: region });
