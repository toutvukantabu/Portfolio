import axios from "axios";

/*const token = import.meta.env.VITE_STRAPI_TOKEN;*/
const baseURL = import.meta.env.VITE_STRAPI_URL;
export const httpClient = axios.create({
    baseURL: `${baseURL}/`,
    headers: {
        "Content-Type": "application/json",
        /*        Authorization: `Bearer ${token}`,*/
    },
});
