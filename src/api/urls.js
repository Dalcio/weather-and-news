// I left here the api keys because I don't have any back-end server for this project and keeping any key in your React client, even if you are using gitignore and an .env file, is not secure. As pointed out by @ClaudiuCreanga, React environment variables are embedded in the build and are publicly accessible.

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=551a92140a939eba32f2a70ac93e5301

const WEATHER_API_KEY = "551a92140a939eba32f2a70ac93e5301";
const NEWS_API_KEY = "08c3de50e58c40649309ffed24d554d2";

/* open weather api urls */
export const openWeatherBaseUrl = "https://api.openweathermap.org/";
export const weatherUrl = `data/2.5//onecall?appid=${WEATHER_API_KEY}`;
export const weatherIconUrl = (img) =>
  new URL(`http://openweathermap.org/img/wn/${img}@2x.png`).href;
export const geolocationUrl = `geo/1.0/direct?appid=${WEATHER_API_KEY}`;
/* new api urls */

export const newsBaseUrl = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${NEWS_API_KEY}`;
