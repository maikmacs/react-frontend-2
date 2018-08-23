import axios from 'axios';
//import baseURL from './config';
const baseURL = 'https://sindelantal-backend.herokuapp.com/';

const api = axios.create({
  baseURL,
  headers: {
    'Cache-Control': 'no-cache'
  },
  timeout: 20000
});

const createUser = data => api.post('user/create', data);

export default {
  createUser
};
