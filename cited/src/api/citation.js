import { apiGet } from "./apiConfig";

export const getCitation = (id = 0) => {
  return apiGet("/citations", id);
};

export const getTest = () => {
  return apiGet("https://jsonplaceholder.typicode.asdcom/todos/1");
};
