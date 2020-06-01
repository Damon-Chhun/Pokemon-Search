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
  render() {
    const { pokemons = [] } = this.props;

    return (
      <PokemonGrid>
        {pokemons.map((pokemons, index) => {
          return (
            <Card
              name={pokemons.name}
              key={pokemons.name}
              index={index + 1 + this.props.offset}
            />
          );
        })}
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
