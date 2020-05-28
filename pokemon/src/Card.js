import React from "react";
import styled from "styled-components";

const Card = ({ name, index }) => {
  return (
    <div>
      <CardInfo>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
          alt="pokemon"
        />
        <h2> {name} </h2>
      </CardInfo>
    </div>
  );
};

export default Card;

const CardInfo = styled.div`
  display: grid;
  justify-items: center;
  background-color: #dde5ff;
`;
