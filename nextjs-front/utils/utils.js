import axios from "axios";

const baseUrl = "http://localhost:3333/api";

const get = (endpoint, data) => axios.get(`${baseUrl}${endpoint}`, data);
const post = (endpoint, data) => axios.post(`${baseUrl}${endpoint}`, data);
const put = (endpoint, data) => axios.put(`${baseUrl}${endpoint}`, data);
const remove = (endpoint, data) => axios.delete(`${baseUrl}${endpoint}`, data);
export { get, put, post, remove };
