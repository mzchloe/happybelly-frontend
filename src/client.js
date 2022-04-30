import axios from "axios";

export const client = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

client.interceptors.request.use((request) => {
    //grab the local token
    const token = localStorage.getItem('token')
    //if there is a token
    if (token) request.headers.Authorization = token;
    return request;
});