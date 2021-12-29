import { openWeatherBaseUrl, weatherUrl } from "./urls";

const getWeatherAPI = async ({ loc, temp }) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = new URL(weatherUrl, openWeatherBaseUrl);
      const unit = (temp === "f" && "imperial") || "metric";
      url.searchParams.append("lon", loc.lon);
      url.searchParams.append("lat", loc.lat);
      url.searchParams.append("units", unit);

      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(null);
    }
  });

export default getWeatherAPI;
