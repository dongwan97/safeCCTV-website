import { axiosPOST } from 'api/commonAxios/commonAxios';

//nickname, comment, id
export const createComment = (req) => axiosPOST('/comment/create', req);
