import React from "react";
import styled from "styled-components";
import "../../Containers/App.css";

const Search = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchStyling = styled.input`
  background: transparent;
  border-radius: 16px;
  height: 5vh;
  width: 20vw;
  text-align: center;
  color: #dde5ff;
  border: solid 2px white;
  outline: none;
`;

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
