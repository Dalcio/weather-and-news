import { useEffect, useState } from "react";

import "./weather.css";

import { getDate } from "../../util";
import { getForecastAPI } from "../../../api";
import { useAppContext } from "../../../context";

import CurrentWeather from "./current-weather";
import CurrentWeatherDetails from "./current-weather-details";
import DetectLocation from "../../main-header/search-for-places/detect-location";
import Loading from "../../loading";

function Weather() {
  const [weather, setWeatherData] = useState(null);
  const [currLocation, setCurrentLocation] = useState();
  const [currTemp, setCurrentTemp] = useState();
  const { temperature, location, changeLocation } = useAppContext();

  const getForThisLocation = ({ name, lat, lon, country }) => {
    changeLocation({ name, country, lat, lon });
  };

  useEffect(() => {
    if (!currLocation && location) {
      setCurrentLocation(location);
    }
  }, [currLocation, location]);

  useEffect(() => {
    if (!currTemp && temperature) {
      setCurrentTemp(temperature);
    }
  }, [currTemp, temperature]);

  useEffect(() => {
    if (
      (!weather || currLocation !== location || temperature !== currTemp) &&
      location
    ) {
      const getWeatherForecast = async () => {
        setWeatherData(null);
        try {
          const { current, timezone } = await getForecastAPI({
            loc: location,
            temp: temperature,
          });
          setWeatherData({ current, timezone });
        } catch (error) {
          setTimeout(getWeatherForecast, 3000);
        }
      };
      setCurrentLocation(location);
      setCurrentTemp(temperature);
      getWeatherForecast();
    }
  }, [
    changeLocation,
    currLocation,
    currTemp,
    location,
    setWeatherData,
    temperature,
    weather,
  ]);

  return (
    <section className="Weather-Container">
      <h3>Weather</h3>
      {weather !== null ? (
        <div className="current-container">
          <CurrentWeather
            current={weather?.current}
            location={location}
            timezone={weather?.timezone}
          />
          <CurrentWeatherDetails
            humidity={weather?.current.humidity}
            sunset={getDate(weather?.current.sunset).time}
            sunrise={getDate(weather?.current.sunrise).time}
            clouds={weather?.current.clouds}
            visibility={weather?.current.visibility}
            dewPoint={weather?.current.dew_point}
            uvi={weather?.current.uvi}
          />
        </div>
      ) : currLocation === undefined ? (
        <DetectLocation setLocation={getForThisLocation} />
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Weather;
