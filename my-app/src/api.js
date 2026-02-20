import axios from 'axios';

const API = axios.create({
  baseURL: 'https://web-production-10396.up.railway.app' 
});

export default API;