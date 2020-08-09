import React, { Component } from "react";
import "../../Containers/App.css";
import Card from "./Card";
import Spinner from "../Spinner";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPokemons, setPokemonInfo, receivedData } from "../action";

const PokemonGrid = styled.div`
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: auto;
  width: 100vw;
`;

class CardArray extends Component {
  async componentDidMount() {
    const oneHour = 60 * 60 * 1000;
    if (
      this.props.needsFetching === null ||
      this.props.needsFetching === true ||
      new Date() - this.props.pokemonsLoadedAt > oneHour
    ) {
      console.log("FETCHING DATA CARDARRAY!!!!!!");
      await this.props.fetchPokemons(this.props.offset);

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
      await this.props.receivedData();
      console.log("RECEIVED DATA CARDARRAY!!!!!!");
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchfield !== this.props.searchfield) {
      console.log(
        "SEARCHFIELD DID UPDATE IN CARDARRAY",
        this.props.searchfield
      );
      this.updateFilteredPokemon(this.props.searchfield);
    }
  }

  updateFilteredPokemon = searchfield => {
    if (this.props.searchfield === "") {
      return this.props.pokemons;
    } else {
      const filteredPokemons = this.props.pokemons.filter(pokemons => {
        return pokemons.name.toLowerCase().includes(searchfield.toLowerCase());
      });
      console.log("filtered Pokemon is Set", filteredPokemons);
      let finalPokemons =
        searchfield !== "" ? filteredPokemons : this.props.pokemons;
      console.log(finalPokemons, "POKEMON DATA");

      return finalPokemons;
    }
  };

  render() {
    const { pokemonInfo = [] } = this.props;
    if (this.props.needsFetching === true) {
      return <Spinner />;
    } else {
      return (
        <PokemonGrid>
          {this.updateFilteredPokemon(this.props.searchfield)
            .slice(this.props.offset, this.props.offset + 20)
            .map((pokemons, index) => {
              const found = pokemonInfo.find(
                ({ name }) => name === pokemons.name
              );
              const initialIndex = pokemons.url.replace("v2", "");
              const newIndex = initialIndex.replace(/[^0-9]/g, "");
              const types = found
                ? found.types.map(types => {
                    return types.type.name;
                  })
                : null;

              return (
                <div key={index} className="testing">
                  <Card
                    name={found ? found.name : null}
                    index={newIndex}
                    number={newIndex}
                    weight={found ? found.weight : null}
                    types={types}
                  />
                </div>
              );
            })}
        </PokemonGrid>
      );
    }
  }
}

const mapStateToProps = state => ({
  offset: state.pagination.value,
  pokemons: state.card.pokemons,
  pokemonInfo: state.pokemonInfo.pokemonInfo,
  pokemonInfoLoaded: state.pokemonInfoLoaded,
  needsFetching: state.card.needsFetching,
  pokemonsLoadedAt: state.card.pokemonsLoadedAt
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPokemons,
      setPokemonInfo,

      receivedData
    },

    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CardArray);
