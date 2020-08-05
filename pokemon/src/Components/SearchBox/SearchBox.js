import React from "react";
import { Search, SearchStyling } from "./StyledComponents";
import "../../Containers/App.css";

const SearchBox = ({ searchChange }) => {
  return (
    <Search>
      <SearchStyling
        type="search"
        placeholder="Search Pokemon!"
        onChange={searchChange}
      />
    </Search>
  );
};

export default SearchBox;
