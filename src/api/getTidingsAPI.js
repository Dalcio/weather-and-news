import { newsBaseUrl } from "./urls";

const { REACT_APP_NEWS_API_KEY } = process.env;

const getTidingsAPI = async (pageSize = 5) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = new URL(`https://newsapi.org/v2/top-headlines?category=science&apiKey=${REACT_APP_NEWS_API_KEY}`);
      url.searchParams.append("pageSize", pageSize);

      const response = await fetch(url);
      const data = await response.json();
      
      console.log("data", data);
      
      resolve(data);
    } catch (error) {
      reject(undefined);
    }
  });

export default getTidingsAPI;
