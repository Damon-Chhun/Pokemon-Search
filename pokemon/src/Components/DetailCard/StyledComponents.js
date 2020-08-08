import styled from "styled-components";

export const PokemonImage = styled.img`
  margin: 0;
  height: 30vh;
  width: 15vw;
  border: solid 5px black;
  background: grey;
`;

export const InfoContainer = styled.div`
  height: 28.5vh;
  width: 15.2vw;
  border: solid 2px black;
`;

export const Card = styled.div`
  background: transparent;
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  border: solid 3px white;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bar = styled.div`
  border-radius: 8px;
  border: solid 2px black;
  height: 3vh;
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
`;

export const StatName = styled.h3`
  font-size: 1.5vh;
  text-align: start;
  position: relative;
`;
export const OuterBarContainer = styled.div`
  width: 5vw;
  height: 4.6vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: pink;
`;

export const StatContainer = styled.div`
  width: 43.95vw;
  height: 30vh;
  margin: 0;
  border: solid 4px orange;
`;

export const RowContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: start;
  align-items: center;
  border: solid 2px black;
`;
