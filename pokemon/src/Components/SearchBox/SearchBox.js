import React from "react";
import styled from "styled-components";
import "../../Containers/App.css";

const SearchBox = ({ searchChange }) => {
  return (
    <Search>
      <input
        className="search"
        type="search"
        placeholder="Search Pokemon!"
        onChange={searchChange}
      />
    </Search>
  );
};

export default SearchBox;

const Search = styled.div`
  display: flex;
  justify-content: center;
`;
