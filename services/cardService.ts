import Card from "models/Card";
import { getApiInstance } from "./apiConfig";

export const getCards = async (page = 1, pageSize = 12) => {
  let cards: Card[] = [];
  const apiInstance = await getApiInstance();
  cards = await apiInstance
    .get(`/cards?page=${page}&&pageSize=${pageSize}`)
    .then((res) => res.data.data)
    .catch((error) => console.log("error : ", error));

  return cards;
};

export const getCard = async (cardId: number) => {
  let card: Card | undefined;
  const apiInstance = await getApiInstance();
  card = await apiInstance
    .get(`/cards/${cardId}`)
    .then((res) => res.data.data)
    .catch((error) => console.log("error : ", error));

  return card;
};
