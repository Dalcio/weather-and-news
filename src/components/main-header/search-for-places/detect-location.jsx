import { MdLocationSearching } from "react-icons/md";

function DetectLocation({ setLocation, onBlur }) {
  const onClick = () => {
    const onSuccess = ({ coords }) => {
      const lat = coords.latitude,
        lon = coords.longitude;
      setLocation({ lat, lon, name: undefined, country: undefined });
    };

    const onError = ({ message }) => {
      alert(message);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    if (onBlur) onBlur();
  };

  return (
    <button
      className="Detect-Location"
      id="detect-location-btn"
      onClick={onClick}
    >
      <span>Detect my location</span>
      <span>
        <MdLocationSearching size={20} />
      </span>
    </button>
  );
}

export default DetectLocation;
