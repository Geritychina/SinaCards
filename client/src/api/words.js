import axios from 'axios';

const API_URL = 'http://localhost:5000/api/words';

export const fetchWords = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createWord = async (word) => {
    const response = await axios.post(API_URL, word);
    return response.data;
};

export const updateWord = async (id, updatedWord) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedWord);
    return response.data;
};

export const deleteWord = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export const exportWords = async () => {
    const response = await axios.get(`${API_URL}/export`);
    return response.data;
};