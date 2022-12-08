import axios from 'axios';

const basePath = "https://webexam-backend.vercel.app/" // for prod
// const basePath = "http://localhost:8000/"; // for development

export const getuserDetails = async (req, res) => {
    const result = await axios.get(`${basePath}user`);
    return result;
};

export const getAllQuestions = async (subject) => {
    let result = {};
    if(subject) {
        result = await axios.get(`${basePath}question/all/${subject}`);
    } else {
        result = await axios.get(`${basePath}question/all`);
    }
    return result;
};