import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://gemnibot-backend.onrender.com/api/qna/ask";

export const fetchChatResponse = async (question) => {
    try {
        const response = await axios.post(API_URL, {question}, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
}