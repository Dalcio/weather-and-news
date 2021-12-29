// import { newsBaseUrl } from "./urls";

const { REACT_APP_GNEWS_API_TOKEN } = process.env;

const getTidingsAPI = async (pageSize = 5) =>
  new Promise(async (resolve, reject) => {
    console.log("Hello");
    console.log(REACT_APP_GNEWS_API_TOKEN);
    try {
      const url = new URL(`https://gnews.io/api/v4/search?q=example&token=${REACT_APP_GNEWS_API_TOKEN}`);
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
