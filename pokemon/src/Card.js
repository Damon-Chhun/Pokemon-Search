import React from "react";
import styled from "styled-components";
import "./App.css";

const Card = ({ name, index, number, weight }) => {
  return (
    <div>
      <CardInfo>
        <div className=" Card-Header ">
          <h1> {name} </h1>
        </div>
        <h3> Number: {number} </h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
          alt="pokemon"
        />
        <h3>Weight: {weight} </h3>
      </CardInfo>
    </div>
  );
};

export default Card;

const CardInfo = styled.div`
  display: grid;
  justify-items: center;
  background-color: #dde5ff;
  border-radius: 12px;
`;
