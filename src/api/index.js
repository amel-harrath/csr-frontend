import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/api',
  headers: {
    'x-user-id': 1,
  },
});

export default api;
