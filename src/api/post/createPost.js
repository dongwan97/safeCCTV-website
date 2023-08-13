import { axiosPOST } from 'api/commonAxios/commonAxios';

export const createPost = () => axiosPOST('/post/create');
