import { axiosDelete } from 'api/commonAxios/commonAxios';

export const deletePost = ({ postId }) => axiosDelete('/post/delete', { postId: postId });
