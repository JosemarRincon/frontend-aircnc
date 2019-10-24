import axios from 'axios';

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
  //require('dotenv').config();
}


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default api;