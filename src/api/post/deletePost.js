import { axiosDelete } from 'api/commonAxios/commonAxios';

export const deletePost = () => axiosDelete('/post/delete');
