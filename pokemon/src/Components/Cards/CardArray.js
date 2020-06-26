import React, { Component } from "react";
import Card from "./Card";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPokemons, fetchPokemonInfo } from "../action";

class CardArray extends Component {
  async componentDidMount() {
    await this.props.fetchPokemons(this.props.offset);
    this.props.pokemons.map(pokemon => {
      let URL = pokemon.url;
      return <div> {this.props.fetchPokemonInfo(URL)}</div>;
    });
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
    const filteredPokemons = this.props.pokemons.filter(pokemons => {
      return pokemons.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    console.log("filtered Pokemon is Set", filteredPokemons);
    let pokemons = searchfield !== "" ? filteredPokemons : this.props.pokemons;
    console.log(pokemons, "POKEMON DATA");

    return pokemons;
  };

  render() {
    return (
      <PokemonGrid>
        {this.updateFilteredPokemon(this.props.searchfield).map(
          (pokemons, index) => {
            const initialIndex = pokemons.url.replace("v2", "");
            const newIndex = initialIndex.replace(/[^0-9]/g, "");
            return (
              <div className="testing">
                <Card
                  name={pokemons.name}
                  index={newIndex}
                  number={newIndex}
                  weight={this.props.weight[newIndex - 1]}
                  key={index}
                />
              </div>
            );
          }
        )}
      </PokemonGrid>
    );
  }
}

const mapStateToProps = state => ({
  offset: state.pagination.value,
  pokemons: state.card.pokemons,
  weight: state.pokemonInfo.weight
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPokemons,
      fetchPokemonInfo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CardArray);

const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 15%);
  grid-column-gap: 5%;
  grid-row-gap: 10px;
  padding: 10px;
`;
