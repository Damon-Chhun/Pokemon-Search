import React, { Component } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
const API_URL = "https://pokeapi.co/api/v2/pokemon/?offset=";
const LIMIT_URL = "&limit=20";

class Pagination extends Component {
  async newRequest() {
    try {
      console.log(this.props.offset);
      const response = await fetch(
        `${API_URL}${this.props.offset}${LIMIT_URL}`
      );
      const { results = [] } = await response.json();
      console.log("data", results);

      this.props.updateAPI(results);
    } catch (err) {
      console.log("err", err);
    }
  }

  requestForNextPage = () => {
    this.props.nextPage();
    // this.newRequest();
  };

  requestForPrevPage = () => {
    this.props.prevPage();
    // this.newRequest();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.offset !== this.props.offset) {
      this.newRequest(this.props.offset);
    }
  }

  render() {
    return (
      <Buttons>
        <p onClick={this.requestForPrevPage} className="pagination-prev">
          Previous
        </p>
        <p onClick={this.requestForNextPage} className="pagination-next">
          Next
        </p>
      </Buttons>
    );
  }
}
export default Pagination;

Pagination.propTypes = {
  offset: propTypes.number.isRequired
};

const Buttons = styled.div`
  border: solid purple;
`;
