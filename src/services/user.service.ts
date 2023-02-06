import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

export const getAboutUs = () => {
  return axios.get<string>(API_URL + "info");
};

export const getProfile = (token: string) => {
  return axios.get(API_URL + `profile?token=${token}`, {
    headers: authHeader(),
  });
};

export const getAuthor = (token: string) => {
  return axios.get(API_URL + `author?token=${token}`, {
    headers: authHeader(),
  });
};

export const getQuote = (token: string, authorId: string) => {
  return axios.get(API_URL + `quote?token=${token}&authorId=${authorId}`, {
    headers: authHeader(),
  });
};
