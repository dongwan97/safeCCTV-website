import { axiosGET } from 'api/commonAxios/commonAxios';

export const checkPost = ({ postId }) => axiosGET('/post/check/', { postId: postId });
