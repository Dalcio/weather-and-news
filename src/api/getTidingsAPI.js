import { newsBaseUrl } from "./urls";

const getTidingsAPI = async (limit = 5) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = new URL(newsBaseUrl);
      url.searchParams.append("limit", limit);

      const response = await fetch(url);
      const data = await response.json();

      resolve(data);
    } catch (error) {
      reject(undefined);
    }
  });

export default getTidingsAPI;
