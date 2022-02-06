import { getApiInstance } from "./apiConfig";

export const getTypes = async () => {
  let types: string[] = [];
  const apiInstance = await getApiInstance();
  types = await apiInstance
    .get(`/types`)
    .then((res) => res.data.data)
    .catch((error) => console.log("error : ", error));

  return types;
};
