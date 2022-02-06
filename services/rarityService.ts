import { getApiInstance } from "./apiConfig";

export const getRarities = async () => {
  let rarities: string[] = [];
  const apiInstance = await getApiInstance();
  rarities = await apiInstance
    .get(`/rarities`)
    .then((res) => res.data.data)
    .catch((error) => console.log("error : ", error));

  return rarities;
};
