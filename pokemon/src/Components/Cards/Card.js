import React from "react";
import styled from "styled-components";
import "../../Containers/App.css";

const CardInfo = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    144deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(149, 214, 238, 1) 33%,
    rgba(0, 145, 210, 1) 100%
  );
  border: solid 5px white;
  border-radius: 12px;
  height: 50vh;
  width: 38vh;
  margin: 2vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
`;

const HoverMechanic = styled.div`
  transition: fill 0.5s;
  ${CardInfo}:hover & {
    animation: bounce 1s;
  }
`;

const Card = ({ name, index, number, weight, types }) => {
  const type = types || [];
  // console.log(type, "TYPE CHECK");
  return (
    <CardInfo className="CardInfo">
      <h1> {name} </h1>
      <h3> Number: {number} </h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt="pokemon"
      />
      <h3>
        Type: {type[0]} {type[1]}
      </h3>
      <h3>Weight: {weight} </h3>
    </CardInfo>
  );
};

export default Card;
