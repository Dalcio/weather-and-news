import { MdRoom } from "react-icons/md";
import { WiUmbrella } from "react-icons/wi";

import { getDate } from "../../../util/date";

export function Region({ name, country }) {
  return (
    <div className="Region">
      <MdRoom />
      <span>
        Weather in {name}, {country}
      </span>
    </div>
  );
}

export function CurrentDate({ dateTime }) {
  return <section className="Current-Date">{getDate(dateTime).utc}</section>;
}

export function MinMaxRainTemp({ rain }) {
  return (
    <div className="Min-Max-Rain-Temp">
      <div className="rain">
        <WiUmbrella />
        Rain - {rain}%
      </div>
    </div>
  );
}

export function WeatherInfo({ desc, feelsLike, rain }) {
  return (
    <div className="Weather-Info">
      <div className="weather-desc">{desc}</div>
      <div className="feels-like">Feels like {feelsLike}&deg;</div>
      <MinMaxRainTemp rain={rain["1h"]} />
    </div>
  );
}
