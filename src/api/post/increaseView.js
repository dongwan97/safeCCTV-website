import { axiosPOST } from 'api/commonAxios/commonAxios';

export const increaseView = ({ postId }) => axiosPOST('/post/increase-views', { postId: postId });
