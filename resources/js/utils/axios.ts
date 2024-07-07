import axios from "axios";
import { config } from "../config";

export const customFetch = axios.create({
    baseURL: `${config.host}/api/`,
});
