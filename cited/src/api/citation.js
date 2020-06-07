import { apiGet } from "./apiConfig";

export const getCitation = (id = 0) => {
  return apiGet("/citation", id);
};

export const getTest = () => {
  return apiGet("https://jsonplaceholder.typicode.com/todos", 1);
};
