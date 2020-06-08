import { apiGet } from "./apiConfig";

export const getCategories = (aspNetUserId = "") => {
  return apiGet("/category", aspNetUserId);
};
