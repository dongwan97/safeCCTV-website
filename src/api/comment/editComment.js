import { axiosPOST } from 'api/commonAxios/commonAxios';

export const editComment = ({ content, commentId }) =>
  axiosPOST('/comment/edit', { content: content, commentId: commentId });
