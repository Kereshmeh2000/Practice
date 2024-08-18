import { default as defaultAxios } from "axios";

const axios = defaultAxios;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common["Accept"] = "application/json";

export default axios;
