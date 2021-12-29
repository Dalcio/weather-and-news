import "./main-header.css";

import Temperature from "./temperature";
import SearchForPlaces from "./search-for-places/index";

function MainHeader() {
  return (
    <header className="Main-Header">
      <SearchForPlaces />
      <Temperature />
    </header>
  );
}

export default MainHeader;
