import React, { Component } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import "../../Containers/App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { nextPage, prevPage, fetchPokemons, fetchPokemonInfo } from "../action";

class Pagination extends Component {
  async newRequest() {
    await this.props.fetchPokemons(this.props.offset);
    this.props.pokemons.map(pokemon => {
      let URL = pokemon.url;
      return <div> {this.props.fetchPokemonInfo(URL)}</div>;
    });
  }

  requestForNextPage = () => {
    const offset =
      this.props.offset <= 346 ? this.props.offset + 20 : this.props.offset;

    this.props.nextPage(offset);
  };

  requestForPrevPage = () => {
    const offset =
      this.props.offset !== 0 ? this.props.offset - 20 : this.props.offset;

    this.props.prevPage(offset);
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

const mapStateToProps = state => {
  console.log("state", state);
  return {
    offset: state.pagination.value,
    pokemons: state.card.pokemons
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("ownProps", ownProps);

  const actionCreators = bindActionCreators(
    {
      nextPage,
      prevPage,
      fetchPokemons,
      fetchPokemonInfo
    },
    dispatch
  );

  return {
    ...actionCreators
  };
};

// export default Pagination;
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

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
