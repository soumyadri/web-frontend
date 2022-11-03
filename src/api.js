import axios from "axios";
const baseUrl = "http://localhost:8000/"

export const postApi = (url, params) => {
    const options = {
        method: 'post',
        url: `${baseUrl}${url}`,
        data: params,
    };
    return axios(options);
};