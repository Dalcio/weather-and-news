/* open weather api urls */
export const openWeatherBaseUrl = "https://api.openweathermap.org/";
export const weatherUrl = `data/2.5//onecall?appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
export const weatherIconUrl = (img) =>
  new URL(`http://openweathermap.org/img/wn/${img}@2x.png`).href;
export const geolocationUrl = `geo/1.0/direct?appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
/* new api urls */

export const newsBaseUrl = `https://newsapi.org/v2/top-headlines?category=science&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
