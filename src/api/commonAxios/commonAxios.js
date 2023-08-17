import axios from 'axios';
import { camelizeKey } from 'utils/camelizeKey';
import { decamelizeKey } from 'utils/decamelizeKey';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.response.use((config) => {
  const newConfig = { ...config };

  if (newConfig.params) {
    newConfig.params = camelizeKey(newConfig.params);
  }
  if (newConfig.data) {
    newConfig.data = camelizeKey(newConfig.data);
  }
  return newConfig;
});

axiosInstance.interceptors.request.use((config) => {
  const newConfig = { ...config };

  if (newConfig.params) {
    newConfig.params = decamelizeKey(newConfig.params);
  }
  if (newConfig.data) {
    newConfig.data = decamelizeKey(newConfig.data);
  }

  console.log('Request', newConfig.data);
  return newConfig;
});
export const axiosGET = (url, params) => axiosInstance.get(url, { params }).then((res) => res.data);

export const axiosPOST = (url, data) => axiosInstance.post(url, { ...data }).then((res) => res.data);

export const axiosDelete = (url, params) => axiosInstance.delete(url, { params }).then((res) => res.data);
