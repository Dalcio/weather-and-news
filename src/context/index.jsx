import { createContext, useContext, useState } from "react";

import { initializer, locationInitializer } from "./initializer";

const Context = createContext({});

function AppProvider({ children }) {
  const [temperature, setTemperature] = useState(initializer);
  const [location, setLocation] = useState(locationInitializer);

  const changeTemperature = () => {
    const temp = (temperature === "f" && "c") || "f";

    localStorage.setItem("temp", temp);

    setTemperature(temp);
  };

  const changeLocation = (loc) => {
    setLocation(loc);
  };

  return (
    <Context.Provider
      value={{ temperature, location, changeTemperature, changeLocation }}
    >
      {children}
    </Context.Provider>
  );
}

export const useAppContext = () => useContext(Context);

export default AppProvider;
