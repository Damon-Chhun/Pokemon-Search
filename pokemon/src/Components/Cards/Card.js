import React from "react";
import "../../Containers/App.css";
import { Link } from "react-router-dom";
import {
  CardInformation,
  Container,
  Cards,
  H1,
  H3,
  PokemonImage
} from "./StyledComponents";

const Card = ({ name, index, number, weight, types }) => {
  const type = types || [];
  // console.log(type, "TYPE CHECK");
  return (
    <Container>
      <Link to={`/Pokemon-Search/${number}`}>
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
      </Link>
    </Container>
  );
};

export default Card;
