import { axiosGET } from 'api/commonAxios/commonAxios';

export const findPost = (postId) => axiosGET(`/posts/${postId}`);
