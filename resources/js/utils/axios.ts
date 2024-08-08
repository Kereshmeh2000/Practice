import axios from "axios";
import { config } from "../config";
import store from "../redux/store";

export const customFetch = axios.create({
    baseURL: `${config.host}/api/`,
    headers: {
        'Content-Type': 'application/json',
    },
});

customFetch.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.user.token;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default customFetch;
