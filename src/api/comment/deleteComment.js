import { axiosDelete } from 'api/commonAxios/commonAxios';

export const deleteComment = ({ commentId }) => axiosDelete('/comment/delete', { commentId: commentId });
