import { axiosPOST } from 'api/commonAxios/commonAxios';

//title nickname id content
export const createPost = (req) => axiosPOST('/post/create', req);
