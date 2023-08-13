import { axiosPOST } from 'api/commonAxios/commonAxios';

export const createComment = () => axiosPOST('/comment/create');
