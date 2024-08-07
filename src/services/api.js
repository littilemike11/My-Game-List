import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";
//get reviews
export const getReviews = () => axios.get(`${API_URL}/reviews`);
export const getReviewById = (id) => axios.get(`${API_URL}/reviews/${id}`);
export const createReview = (review) =>
  axios.post(`${API_URL}/reviews`, review);
export const updateReview = (id, review) =>
  axios.put(`${API_URL}/reviews/${id}`, review);
export const deleteReview = (id) => axios.delete(`${API_URL}/reviews/${id}`);

//get Posts
export const getPosts = () => axios.get(`${API_URL}/posts`);
export const getPostById = (id) => axios.get(`${API_URL}/post/${id}`);
export const createPost = (post) => axios.post(`${API_URL}/post`, post);
export const updatePost = (id, post) =>
  axios.put(`${API_URL}/post/${id}`, post);
export const deletePost = (id) => axios.delete(`${API_URL}/post/${id}`);
