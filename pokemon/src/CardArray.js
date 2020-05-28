import React from "react";
import Card from "./Card";
import styled from "styled-components";

const cardArray = ({ pokemons }) => {
  return (
    <PokemonGrid>
      {pokemons.map((pokemons, index) => {
        return (
          <Card name={pokemons.name} key={pokemons.name} index={index + 1} />
        );
      })}
    </PokemonGrid>
  );
};

export default cardArray;

const PokemonGrid = styled.div`
  border: solid red;
  display: grid;
  grid-template-columns: repeat(5, 15%);
  grid-column-gap: 5%;
  grid-row-gap: 10px;
  padding: 10px;
`;
