import { geolocationUrl, openWeatherBaseUrl } from "./urls";

const searchForPlaces = (name) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = new URL(geolocationUrl, openWeatherBaseUrl);
      url.searchParams.append("q", name);

      const response = await fetch(url);
      const data = await response.json();

      resolve(data);
    } catch (error) {
      reject(undefined);
    }
  });

export default searchForPlaces;
