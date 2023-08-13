import { axiosPOST } from 'api/commonAxios/commonAxios';

export const increaseView = (req) => axiosPOST('/post/increase-views', req);
