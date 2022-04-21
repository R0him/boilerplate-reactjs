import axios from 'axios';

const baseURL = process.env.REACT_APP_DIGIMON_URL;

const Axios = axios.create({
  baseURL,
  timeout: 5000,
});

export default Axios;
