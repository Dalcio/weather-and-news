import { useState } from "react";
import { MdSearch } from "react-icons/md";

function SearchInput({ search, searching, onFocus, onBlur }) {
  const [focus, setFocus] = useState(undefined);

  const handleOnFocus = () => {
    onFocus();
    setFocus("true");
  };

  const handleOnBlur = () => {
    // onBlur();
    setFocus(undefined);
  };

  return (
    <div className="Search-Input" focus={focus}>
      <input
        onChange={searching}
        value={search}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholder="Search for location"
      />
      <MdSearch size={26} />
    </div>
  );
}

export default SearchInput;
