import { axiosPOST } from 'api/commonAxios/commonAxios';

export const editPost = ({ title, content, postId, nickname, id }) =>
  axiosPOST('/post/edit', { title: title, content: content, postId: postId, nickname: nickname, id: id });
