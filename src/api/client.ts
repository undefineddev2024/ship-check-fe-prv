import axios from 'axios';
import { getBaseApiUrl } from '../util/config';

const client = axios.create({
  baseURL: getBaseApiUrl(),
  //   headers: {},
});

export default client;
