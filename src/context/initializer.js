export const initializer = () => {
  let temperature = localStorage.getItem("temp");

  if (!temperature) {
    temperature = "c";
  }

  return temperature;
};

export const locationInitializer = () => {
  let location = null;
  if (navigator.geolocation) {
    const getCurrLocation = (coords) => {
      location = { lat: coords.latitude, lon: coords.longitude };
    };

    const onError = () => {
      alert("Please search for some place");
    };

    navigator.geolocation.getCurrentPosition(getCurrLocation, onError);
  }

  return location;
};
