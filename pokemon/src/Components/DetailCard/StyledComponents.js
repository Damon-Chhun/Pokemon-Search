import styled from "styled-components";

export const PokemonImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 30vh;
  width: 15vw;
  border: dotted 5px blue;
`;

export const Card = styled.div`
  background: white;
  height: 60vh;
  width: 45vw;
  display: flex;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 5px purple;
`;

export const PokemonBar = styled.div`
  background-color: red;
  height: 5vh;
  border-radius: 8px;
  margin-left: 5px;
`;
export const StatName = styled.p`
  background: transparent;
`;
export const HPContainer = styled.div`
  border: solid 5px pink;
  width: 25vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: pink;
`;
export const AttackContainer = styled.div`
  border: solid 5px orange;
  width: 25vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: orange;
`;

export const StatContainer = styled.div`
  border: dotted 5px orange;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
`;
