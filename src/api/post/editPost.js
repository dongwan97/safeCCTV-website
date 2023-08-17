import { axiosPOST } from 'api/commonAxios/commonAxios';

export const editPost = ({ title, content }) => axiosPOST('/post/edit', { title: title, content: content });
