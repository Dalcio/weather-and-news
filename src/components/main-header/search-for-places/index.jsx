import { useEffect, useState } from "react";
import DetectLocation from "./detect-location";
import NoResultFound from "./no-result-found";

import "./search-for-places.css";

import { useAppContext } from "../../../context";

import Places from "./places";
import SearchInput from "./search-input";
import { searchForPlacesAPI } from "../../../api";

function SearchForPlaces() {
  const { changeLocation } = useAppContext();
  const [focus, setFocus] = useState(undefined);
  const [search, setSearch] = useState("");
  const [showDtLocation, setDtLocation] = useState(false);
  const [places, setPlaces] = useState([]);

  const searching = async ({ target: { value } }) => {
    if (showDtLocation) {
      setDtLocation(false);
    }

    if (value !== "") {
      const data = await searchForPlacesAPI(value);
      setPlaces(data);
    }

    setSearch(value);
  };

  const onFocus = () => {
    setDtLocation(true);
    setFocus("true");
  };

  const onBlur = () => {
    setDtLocation(false);
    setSearch("");
    setFocus(undefined);
    setPlaces([]);
  };

  const getForThisLocation = ({ name, lat, lon, country }) => {
    changeLocation({ name, country, lat, lon });
    onBlur();
  };

  useEffect(() => {
    if (search === "") {
      setPlaces([]);
    }
  }, [search]);

  return (
    <>
      <div className="Search-For-Places" focus={focus}>
        <SearchInput search={search} searching={searching} onFocus={onFocus} />
        {(showDtLocation && navigator.geolocation && (
          <DetectLocation setLocation={getForThisLocation} onBlur={onBlur} />
        )) || (
          <div className="search-field">
            {(places.length !== 0 && search !== "" && (
              <Places data={places} onClick={getForThisLocation} />
            )) ||
              (search !== "" && <NoResultFound onBlur={onBlur} />)}
          </div>
        )}
      </div>
      {focus === "true" && <div className="pane" onClick={onBlur} />}
    </>
  );
}

export default SearchForPlaces;
