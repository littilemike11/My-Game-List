import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";
//change to game and posts
export const getReviews = () => axios.get(`${API_URL}/posts`);
export const getReviewById = (id) => axios.get(`${API_URL}/post/${id}`);
export const createReview = (post) => axios.post(`${API_URL}/post`, post);
export const updateReview = (id, post) =>
  axios.put(`${API_URL}/post/${id}`, post);
export const deleteReview = (id) => axios.delete(`${API_URL}/post/${id}`);
