import { axiosGET } from 'api/commonAxios/commonAxios';

export const checkComment = ({ postId }) => axiosGET('/comment/check', { postId: postId });
