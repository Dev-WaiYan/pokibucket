import Card from "models/Card";
import { getApiInstance } from "./apiConfig";

export const getCards = async (
  page = 1,
  pageSize = 12,
  type?: string,
  rarity?: string,
  setName?: string,
  name?: string
) => {
  let url = `/cards?page=${page}&&pageSize=${pageSize}&&q=`;

  if (type !== "_default") {
    url += `types:${type}`;
  }

  if (rarity !== "_default") {
    url += url.slice(-1) === "=" ? `rarity:${rarity}` : ` rarity:${rarity}`;
  }

  if (setName !== "_default") {
    url +=
      url.slice(-1) === "=" ? `set.name:${setName}` : ` set.name:${setName}`;
  }

  if (name) {
    url += url.slice(-1) === "=" ? `name:${name}*` : ` name:${name}*`;
  }

  let cards: Card[] = [];
  const apiInstance = await getApiInstance();
  cards = await apiInstance
    .get(url)
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
