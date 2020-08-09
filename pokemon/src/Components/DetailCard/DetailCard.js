import React from "react";
import {
  PokemonImage,
  Card,
  Container,
  Bar,
  StatName,
  OuterBarContainer,
  StatContainer,
  RowContainer,
  InfoContainer
} from "./StyledComponents";

const DetailCard = ({
  stats,
  pokemonNumber,
  statNames,
  height,
  weight,
  types,
  index,
  name
}) => (
  <Container>
    <Card>
      <PokemonImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
        alt="pokemon"
      />
      <StatContainer>
        <RowContainer style={{ backgroundColor: "rgb(255,89,88)" }}>
          <OuterBarContainer style={{ backgroundColor: "rgb(255, 89, 88)" }}>
            <StatName>
              {statNames[0]}: {stats[0]}{" "}
            </StatName>
          </OuterBarContainer>
          <Bar
            style={{
              width: `${stats[0] * 0.7}%`,
              backgroundColor: "rgb(255, 0, 0)"
            }}
          />
        </RowContainer>

        <RowContainer style={{ backgroundColor: "rgb(245,172,120)" }}>
          <OuterBarContainer style={{ backgroundColor: "rgb(245,172,120)" }}>
            <StatName>
              {statNames[1]}: {stats[1]}{" "}
            </StatName>
          </OuterBarContainer>
          <Bar
            style={{
              width: `${stats[1] * 0.7}%`,
              backgroundColor: "rgb(241,127,48)"
            }}
          />
        </RowContainer>

        <RowContainer style={{ backgroundColor: "rgb(250,224,120)" }}>
          <OuterBarContainer style={{ backgroundColor: "rgb(250,224,120)" }}>
            <StatName>
              {statNames[2]}: {stats[2]}{" "}
            </StatName>
          </OuterBarContainer>
          <Bar
            style={{
              width: `${stats[2] * 0.7}%`,
              backgroundColor: "rgb(249,208,49)"
            }}
          />
        </RowContainer>

        <RowContainer style={{ backgroundColor: "rgb(157,183,245)" }}>
          <OuterBarContainer style={{ backgroundColor: "rgb(157,183,245)" }}>
            <StatName>
              {statNames[3]}: {stats[3]}{" "}
            </StatName>
          </OuterBarContainer>
          <Bar
            style={{
              width: `${stats[3] * 0.7}%`,
              backgroundColor: "rgb(104,144,240)"
            }}
          />
        </RowContainer>

        <RowContainer style={{ backgroundColor: "rgb(167,219,140)" }}>
          <OuterBarContainer style={{ backgroundColor: "rgb(167,219,140)" }}>
            <StatName>
              {statNames[4]}: {stats[4]}{" "}
            </StatName>
          </OuterBarContainer>
          <Bar
            style={{
              width: `${stats[4] * 0.7}%`,
              backgroundColor: "rgb(120,200,80)"
            }}
          />
        </RowContainer>

        <RowContainer style={{ backgroundColor: "rgb(250,146,178)" }}>
          <OuterBarContainer style={{ backgroundColor: "rgb(250,146,178)" }}>
            <StatName>
              {statNames[5]}: {stats[5]}{" "}
            </StatName>
          </OuterBarContainer>
          <Bar
            style={{
              width: `${stats[5] * 0.7}%`,
              backgroundColor: "rgb(247,88,136)"
            }}
          />
        </RowContainer>
      </StatContainer>
      <InfoContainer>
        <h3>#:{index}</h3>

        {/* <h3>Weight: {weight}</h3> */}
      </InfoContainer>{" "}
      */}
    </Card>
  </Container>
);

export default DetailCard;
