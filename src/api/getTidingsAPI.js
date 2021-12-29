import { newsBaseUrl } from "./urls";

const getTidingsAPI = async (pageSize = 5) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = new URL(newsBaseUrl);
      url.searchParams.append("pageSize", pageSize);

      const response = await fetch(url);
      const data = await response.json();

      resolve(data);
    } catch (error) {
      reject(undefined);
    }
  });

export default getTidingsAPI;
