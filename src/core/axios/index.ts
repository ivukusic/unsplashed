import axios from 'axios';

export const BASE_URL = 'https://api.unsplash.com/';

const KEYS = {
  ACCESS_KEY: 'BebAOgEw8ujwaShbHgmzuzXa_wY4Pjk3EmX9HTPY1LY',
};

const axiosInstance = axios.create({ baseURL: BASE_URL, timeout: 30000 });
axiosInstance.defaults.headers.common.Authorization = `Client-ID ${KEYS.ACCESS_KEY}`;

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
