import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'https://dev2.utcook.com'
      ? 'http://dev2.utcook.com'
      : 'http://127.0.0.1:8000',

  headers: {
    accept: '*/*',
    'X-Requested-With': 'XMLHttpRequest',
  },
});
export default instance;
