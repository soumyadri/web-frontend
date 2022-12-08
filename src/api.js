import axios from "axios";
// const baseUrl = "http://localhost:8000/"; // for development
const baseUrl = "https://webexam-backend.vercel.app/" // for production

export const postApi = (url, params) => {
    const options = {
        method: 'post',
        url: `${baseUrl}${url}`,
        data: params,
    };
    return axios(options);
};