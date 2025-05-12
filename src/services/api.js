import axios from "axios";

const BASE_URL = 'http://192.168.43.186:2000/';

export const apiManager = axios.create({
  baseURL: BASE_URL,
  timeout: 1000
});