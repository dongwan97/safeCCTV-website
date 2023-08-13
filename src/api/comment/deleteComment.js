import { axiosDelete } from 'api/commonAxios/commonAxios';

export const deleteComment = () => axiosDelete('/comment/delete');
