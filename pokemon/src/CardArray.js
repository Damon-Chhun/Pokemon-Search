import React from "react";
import Card from "./Card";

const cardArray = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemons, index) => {
        return (
          <Card name={pokemons.name} key={pokemons.name} index={index + 1} />
        );
      })}
    </div>
  );
};

export default cardArray;
