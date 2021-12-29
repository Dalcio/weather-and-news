import { WiCelsius, WiFahrenheit } from "react-icons/wi";

import { useAppContext } from "../../../context";

function TemperatureButton({ temp }) {
  const { temperature, changeTemperature } = useAppContext();

  return (
    <button
      onClick={changeTemperature}
      className={(temperature === temp && "current") || undefined}
    >
      {(temp === "f" && <WiFahrenheit size={32} viewBox="0 0 30 26" />) ||
        (temp === "c" && <WiCelsius size={32} viewBox="0 0 30 26" />)}
    </button>
  );
}
export default TemperatureButton;
