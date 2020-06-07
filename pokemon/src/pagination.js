import React, { Component } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import "./App.css";
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
      console.log("TEST", this.props.offset);
      this.newRequest(this.props.offset);
    }
  }

  render() {
    return (
      <Buttons>
        <p onClick={this.requestForPrevPage} className="pagination-prev">
          &laquo; Previous
        </p>
        <p onClick={this.requestForNextPage} className="pagination-next">
          Next &raquo;
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
  background-color: #e73a51;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;
