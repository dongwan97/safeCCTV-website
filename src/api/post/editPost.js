import { axiosPOST } from 'api/commonAxios/commonAxios';

export const editPost = () => axiosPOST('/post/edit');
