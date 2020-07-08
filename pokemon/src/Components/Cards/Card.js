import React from "react";
import styled from "styled-components";
import "../../Containers/App.css";

const Cards = styled.div`
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
  width: 17vw;
  margin: 2vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
`;

const CardInformation = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content center; 
    align-content: center;
`;

const H1 = styled.h1`
  font-size: 3vh;
  margin: 5px;
`;

const H3 = styled.h3`
  font-size: 2vh;
  margin: 5px;
`;

const PokemonImage = styled.img`
  margin: 5vh;
  width: 8vw;
`;

const Card = ({ name, index, number, weight, types }) => {
  const type = types || [];
  // console.log(type, "TYPE CHECK");
  return (
    <Cards>
      <CardInformation>
        <H1> {name} </H1>
        <H3> Number: {number} </H3>
        <PokemonImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
          alt="pokemon"
        />
        <H3>
          Type: {type[0]} {type[1]}
        </H3>
        <H3>Weight: {weight} </H3>
      </CardInformation>
    </Cards>
  );
};

export default Card;
