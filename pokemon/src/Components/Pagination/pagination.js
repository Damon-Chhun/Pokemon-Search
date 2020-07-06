import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../../Containers/App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { nextPage, prevPage, fetchPokemons, setPokemonInfo } from "../action";

const Buttons = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-cotent: center;
`;

class Pagination extends Component {
  async nextRequest() {
    const { pokemons, pokemonInfo } = this.props;

    const names1 = pokemons.map(pokemons => {
      return pokemons.name;
    });
    console.log(names1, "NAMES!");
    const names2 = pokemonInfo.map(pokemons => {
      return pokemons.name;
    });
    console.log(names2, "NAMES!");

    const checkingNames = names1.some(names => names2.includes(names));
    console.log(checkingNames, "CHECKING NAMES");

    if (checkingNames !== true) {
      const defs = this.props.pokemons.reduce((accumulator, { url }) => {
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
    } else {
      console.log("ERROR WHEN SETTING POKEMON");
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
      await this.props.fetchPokemons(this.props.offset);
      console.log(this.props.pokemons, "FETCH POKEMONS!!!!!");
      await this.nextRequest();
    } else if (prevOffset > currOffset) {
      return this.props.fetchPokemons(this.props.offset);
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
    pokemons: state.card.pokemons,
    pokemonInfo: state.pokemonInfo.pokemonInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("ownProps", ownProps);

  const actionCreators = bindActionCreators(
    {
      nextPage,
      prevPage,
      fetchPokemons,
      setPokemonInfo
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
