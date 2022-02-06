import ModelSet from "models/ModelSet";
import { getApiInstance } from "./apiConfig";

export const getSets = async () => {
  let sets: ModelSet[] = [];
  const apiInstance = await getApiInstance();
  sets = await apiInstance
    .get(`/sets`)
    .then((res) => res.data.data)
    .catch((error) => console.log("error : ", error));

  return sets;
};
