import axios from 'axios';

export const getuserDetails = async (req, res) => {
    const result = await axios.get('http://localhost:8000/user');
    return result;
};