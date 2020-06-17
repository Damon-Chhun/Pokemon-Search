import React, { Component } from "react";
import Card from "./Card";
import styled from "styled-components";

class CardArray extends Component {
  async componentDidMount() {
    try {
      const API_URL = "https://pokeapi.co/api/v2/pokemon/?offset=";
      const LIMIT_URL = "&limit=20";
      const response = await fetch(
        `${API_URL}${this.props.offset}${LIMIT_URL}`
      );
      const { results = [] } = await response.json();

      this.props.updateAPI(results);
    } catch (e) {
      console.log(e);
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
            return (
              <div className="testing">
                <Card
                  name={pokemons.name}
                  key={index}
                  index={index + 1 + this.props.offset}
                  weight={this.props.weight[index + this.props.offset]}
                />
              </div>
            );
          }
        )}
      </PokemonGrid>
    );
  }
}

export default CardArray;

const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 15%);
  grid-column-gap: 5%;
  grid-row-gap: 10px;
  padding: 10px;
`;
