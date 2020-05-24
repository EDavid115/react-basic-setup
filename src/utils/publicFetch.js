import axios from 'axios';

const PublicFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default PublicFetch;
