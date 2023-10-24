import axios from "axios";


const BASE_URL = 'http://localhost:5000/api/v1';

const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

axiosPublic.interceptors.request.use(
    async (config) => {
      if (!config.headers.Authorization) {
        const accesstoken = JSON.parse(localStorage?.getItem('UserJwtToken'));

        const token=accesstoken?.token;
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );

export default axiosPublic ;