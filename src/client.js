import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:4000",
    /* baseURL: process.env.REACT_APP_BACEKND,
 */
});

client.interceptors.request.use((request) => {
    //grab the local token
    const token = localStorage.getItem('token')
    //if there is a token
    if (token) request.headers.Authorization = token;
    return request;
});