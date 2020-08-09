import React, { Component } from "react";
import { PaginationText, Buttons } from "./StyledComponents";
import PropTypes from "prop-types";
import "../../Containers/App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  nextPage,
  prevPage,
  fetchPokemons,
  setPokemonInfo,
  receivedData
} from "../action";

class Pagination extends Component {
  async nextRequest() {
    const { pokemons, pokemonInfo } = this.props;
    const pokemonsState = pokemons.map(pokemons => {
      return pokemons.name;
    });
    console.log(pokemonsState, "pokemons state");

    const pokemonsInfoState = pokemonInfo.map(pokemons => {
      return pokemons.name;
    });

    const checkingNames = await pokemonsInfoState.some(names =>
      pokemonsInfoState.includes(pokemonsState.slice(-20))
    );
    console.log(checkingNames, "Comparing pokemons and pokemonsInfo State");

    if (checkingNames !== true) {
      console.log(pokemons, "CHECKING LAST TWENTY POKEMON OF STATE", pokemons);
      const defs = pokemons.slice(-20).reduce((accumulator, { url }) => {
        const def = new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(url);
            const results = await response.json();

            resolve(results);
          } catch (e) {
            reject(e);
          }
        });

        accumulator.push(def);
        return accumulator;
      }, []);
      const pokemonData = await Promise.all(defs);
      await this.props.setPokemonInfo(pokemonData);
      this.props.receivedData();
    } else {
      console.log(
        "state.card.pokemons DOES EQUAL state.pokemonInfo.pokemonInfo"
      );
    }
  }

  requestForNextPage = () => {
    const offsetCheck =
      this.props.offset <= 346 ? this.props.offset + 20 : this.props.offset;
    this.props.nextPage(offsetCheck);
  };

  requestForPrevPage = () => {
    const offsetCheck =
      this.props.offset !== 0 ? this.props.offset - 20 : this.props.offset;
    this.props.prevPage(offsetCheck);
  };

  async componentDidUpdate(prevProps) {
    const { offset: prevOffset } = prevProps;
    const { offset: currOffset } = this.props;
    if (prevOffset < currOffset) {
      console.log("ComponentDidUpdate Pagination.js Line 87");
      console.log("OFFSET", this.props.offset);
      if (this.props.pokemons.length < this.props.offset + 20) {
        console.log("FETCHING POKEMON IN PAGINATION");
        await this.props.fetchPokemons(this.props.offset);
        await this.nextRequest();
      }
    } else if (prevOffset > currOffset) {
    }
  }

  render() {
    return (
      <Buttons>
        <PaginationText
          onClick={this.requestForPrevPage}
          className="pagination-prev"
        >
          &laquo; Previous
        </PaginationText>
        <PaginationText
          onClick={this.requestForNextPage}
          className="pagination-next"
        >
          Next &raquo;
        </PaginationText>
      </Buttons>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    offset: state.pagination.value,
    pokemons: state.card.pokemons,
    pokemonInfo: state.pokemonInfo.pokemonInfo,
    tempPokemons: state.card.tempPokemon
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("ownProps", ownProps);

  const actionCreators = bindActionCreators(
    {
      nextPage,
      prevPage,
      fetchPokemons,
      setPokemonInfo,
      receivedData
    },
    dispatch
  );

  return {
    ...actionCreators
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

Pagination.defaultProps = {
  pokemons: [],
  fetchPokemons: () => {},
  fetchPokemonInfo: () => {}
};
Pagination.propTypes = {
  offset: PropTypes.number.isRequired,
  fetchPokemons: PropTypes.func,
  pokemons: PropTypes.array
};
