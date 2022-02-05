import axios, { AxiosInstance } from "axios";

export const getApiInstance = (): Promise<AxiosInstance> => {
  return new Promise((resolve) => {
    resolve(
      axios.create({
        baseURL: process.env.API_SERVER_URL,
        headers: {
          "X-Api-Key": process.env.API_KEY ? process.env.API_KEY : "",
        },
      })
    );
  });
};
