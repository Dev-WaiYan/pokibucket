import { AxiosInstance } from "axios";
import { getApiInstance } from "./apiConfig";

export const getCards = (page = 1, pageSize = 12) => {
  getApiInstance().then((apiInstance: AxiosInstance) => {
    apiInstance.get(`/cards?page=${page}&&pageSize=${pageSize}`).then((res) => {
      console.log("cards", res.data);
    });
  });
  return {};
};

export const getCard = (cardId: number) => {
  getApiInstance().then((apiInstance: AxiosInstance) => {
    apiInstance.get(`/cards/${cardId}`).then((res) => {
      console.log("cards", res.data);
    });
  });
  return {};
};
