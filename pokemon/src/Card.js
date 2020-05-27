import React from "react";

const Card = ({ name, index }) => {
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt="pokemon"
      />
      <h2> {name} </h2>
    </div>
  );
};

export default Card;
