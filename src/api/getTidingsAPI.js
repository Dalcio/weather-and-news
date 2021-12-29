// import { newsBaseUrl } from "./urls";

const { REACT_APP_GNEWS_API_TOKEN } = process.env;

const getTidingsAPI = async (max = 5) =>
  new Promise(async (resolve, reject) => {
    // console.log("Hello");
    // console.log(REACT_APP_GNEWS_API_TOKEN);
    try {
      const url = new URL(
        `https://gnews.io/api/v4/top-headlines?&token=${REACT_APP_GNEWS_API_TOKEN}`
      );
      url.searchParams.append("max", max);

      const response = await fetch(url);
      const data = await response.json();

      resolve(data);
    } catch (error) {
      reject(undefined);
    }
  });

export default getTidingsAPI;
