import axios from 'axios';
const apiKey =
  'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Client-ID ${apiKey}`,
  }
});

export default (url) => axiosInstance.get(url);