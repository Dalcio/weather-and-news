import { MdOutlineVisibility } from "react-icons/md";
import {
  WiSunrise,
  WiSunset,
  WiMoonrise,
  WiMoonset,
  WiHumidity,
  WiCloud,
  WiRaindrop,
  WiDaySunny,
  WiMoonAltWaningCrescent1,
  WiMoonAltWaxingCrescent1,
  WiMoonAltWaxingGibbous1,
  WiMoonAltWaningGibbous1,
  WiMoonNew,
  WiMoonFirstQuarter,
  WiMoonFull,
  WiMoonAltThirdQuarter,
} from "react-icons/wi";

const IconFor = ({ isFor }) => {
  switch (isFor) {
    case "humidity":
      return <WiHumidity className="humidity" />;
    case "dew point":
      return <WiRaindrop className="dew-point" />;
    case "clouds":
      return <WiCloud className="clouds" />;
    case "visibility":
      return <MdOutlineVisibility className="visibility" />;
    case "sunrise":
      return <WiSunrise className="sun" />;
    case "sunset":
      return <WiSunset className="sun" />;
    case "moonrise":
      return <WiMoonrise className="moon" />;
    case "moonset":
      return <WiMoonset className="moon" />;
    case "uv index":
      return <WiDaySunny className="uv-index" />;
    case "new moon":
      return <WiMoonNew className="new-moon" />;
    case "first quarter moon":
      return <WiMoonFirstQuarter className="first-quarter-moon" />;
    case "full moon":
      return <WiMoonFull className="full-moon" />;
    case "last quarter moon":
      return <WiMoonAltThirdQuarter className="last-quarter-moon" />;
    case "waxing crescent":
      return <WiMoonAltWaxingCrescent1 className="waxing-crescent" />;
    case "waxing gibous":
      return <WiMoonAltWaxingGibbous1 className="waxing-gibous" />;
    case "waning crescent":
      return <WiMoonAltWaningCrescent1 className="waning-crescent" />;
    case "waning gibous":
      return <WiMoonAltWaningGibbous1 className="waning-gibous" />;
    default:
      return null;
  }
};

export default IconFor;
