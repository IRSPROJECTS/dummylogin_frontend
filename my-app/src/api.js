import axios from 'axios';

const API = axios.create({
  baseURL: 'web-production-10396.up.railway.app' 
});

export default API;