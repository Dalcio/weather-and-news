const getLocation = () =>
  new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        // console.log(position);
        localStorage.setItem("my-location", JSON.stringify(coords));
        resolve(coords);
      }, console.log);
    }

    reject("Geolocation is not supported by this browser.");
  });

export default getLocation;
