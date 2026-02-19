import axios from 'axios';

const API = axios.create({
  baseURL: 'web-production-118b9.up.railway.app' 
});

export default API;