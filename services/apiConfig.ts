import axios, { AxiosInstance } from "axios";

export const getApiInstance = (): Promise<AxiosInstance> => {
  return new Promise((resolve) => {
    resolve(
      axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
        headers: {
          // Client side api call like load more will not include API_KEY.
          // Because API_KEY is secret and only used in server side.
          "X-Api-Key": process.env.API_KEY ? process.env.API_KEY : "",
        },
      })
    );
  });
};
