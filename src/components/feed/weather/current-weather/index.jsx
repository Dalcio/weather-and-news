import "./current-weather.css";

import { CurrentDate, Region, WeatherInfo } from "./helpers";
import { weatherIconUrl } from "../../../../api/urls";

function CurrentWeather({ current, timezone, location }) {
  const { name, country } = location;

  return (
    <div className="Current-Weather">
      {(name !== undefined && country !== undefined && (
        <Region name={name} country={country} />
      )) || (
        <Region
          name={timezone.split("/")[1]}
          country={timezone.split("/")[0]}
        />
      )}
      <img
        src={weatherIconUrl(current.weather[0].icon)}
        alt={current.weather[0].main}
        className="weather-icon"
      />
      <div className="temp">{current.temp}&deg;</div>
      <WeatherInfo
        desc={current.weather[0].description}
        feelsLike={current.feels_like}
        rain={(current.rain && current.rain) || 0}
      />
      <CurrentDate dateTime={current.dt} />
    </div>
  );
}

export default CurrentWeather;
