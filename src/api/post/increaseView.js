import { axiosPOST } from 'api/commonAxios/commonAxios';

export const increaseView = () => axiosPOST('/post/increase-views');
