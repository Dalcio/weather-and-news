import "./temperature.css";

import TemperatureButton from "./temperature-button";

function Temperature() {
  return (
    <div className="Temperature">
      <TemperatureButton temp="c" />
      <TemperatureButton temp="f" />
    </div>
  );
}

export default Temperature;
