import React from "react";
import {
  PokemonImage,
  Card,
  Container,
  PokemonBar,
  StatName,
  HPContainer,
  AttackContainer,
  StatContainer
} from "./StyledComponents";

const DetailCard = ({ stats, pokemonNumber, statNames }) => (
  <Container>
    <Card>
      <PokemonImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
        alt="pokemon"
      />
      <StatContainer>
        <HPContainer>
          <StatName>
            {statNames[0]}: {stats[0]}{" "}
          </StatName>
          <PokemonBar style={{ width: `${stats[0]}%` }}></PokemonBar>
        </HPContainer>
        <AttackContainer>
          <StatName>
            {statNames[1]}: {stats[1]}{" "}
          </StatName>
          <PokemonBar style={{ width: `${stats[0]}%` }}></PokemonBar>
        </AttackContainer>
      </StatContainer>
    </Card>
  </Container>
);

export default DetailCard;
