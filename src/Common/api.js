import axios from 'axios';

export const getuserDetails = async (req, res) => {
    const result = await axios.get('http://localhost:8000/user');
    return result;
};

export const getAllQuestions = async (subject) => {
    let result = {};
    if(subject) {
        result = await axios.get(`http://localhost:8000/question/all/${subject}`);
    } else {
        result = await axios.get('http://localhost:8000/question/all');
    }
    return result;
};