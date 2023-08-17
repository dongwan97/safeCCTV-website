import { axiosPOST } from 'api/commonAxios/commonAxios';

//title nickname id content
export const createPost = ({ title, nickname, id, content }) =>
  axiosPOST('/post/create', { title: title, nickname: nickname, id: id, content: content });
