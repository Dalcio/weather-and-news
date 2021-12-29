import "./current-weather-details.css";

import WeatherStatus from "./weather-status";

function CurrentWeatherDetails({
  humidity,
  sunset,
  sunrise,
  clouds,
  visibility,
  dewPoint,
  uvi
}) {
  return (
    <>
      <WeatherStatus status={uvi} isFor="UV Index" className="uv-index" />
      <WeatherStatus status={`${humidity}%`} isFor="Humidity" className="humidity" />
      <WeatherStatus status={dewPoint} isFor="Dew Point" deg className="dew-point" />
      <WeatherStatus status={`${visibility} m`} isFor="Visibility" className="visibility" />
      <WeatherStatus status={`${clouds}%`} isFor="Clouds" />
      <WeatherStatus status={sunrise} isFor="Sunrise" className="sunrise" />
      <WeatherStatus status={sunset} isFor="Sunset" className="sunset" />
    </>
  );
}
export default CurrentWeatherDetails;
