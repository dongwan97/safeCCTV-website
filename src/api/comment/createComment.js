import { axiosPOST } from 'api/commonAxios/commonAxios';

//nickname, comment, id
export const createComment = ({ nickname, content, id, postId }) =>
  axiosPOST('/comment/create/', { nickname: nickname, content: content, id: id, postId: postId });
