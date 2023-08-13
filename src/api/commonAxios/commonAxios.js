import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const axiosGET = (url, params) => axiosInstance.get(url, { params }).then((res) => res.data);

export const axiosPOST = (url, data) => axiosInstance.post(url, { ...data }).then((res) => res.data);

export const axiosDelete = (url, params) => axiosInstance.delete(url, { params }).then((res) => res.data);
