import { axiosPOST } from 'api/commonAxios/commonAxios';

export const editComment = () => axiosPOST('/comment/edit');
