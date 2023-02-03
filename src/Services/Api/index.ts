import axios from 'axios';

const api = axios.create({
    baseURL: "http://testapp.axreng.com:4567",
});

export default api;