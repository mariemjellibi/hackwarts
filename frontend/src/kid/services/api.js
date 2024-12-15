import axios from "axios";

const API_BASE_URL = "http://localhost:5002/api/lessons";

// Mark a lesson as complete
export const completeLesson = async (userId, lessonName) => {
  return axios.post(`${API_BASE_URL}/complete`, { userId, lessonName });
};

// Check if the pet is hungry
export const checkPetStatus = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/pet-status/${userId}`);
  return response.data.petHungry;
};
