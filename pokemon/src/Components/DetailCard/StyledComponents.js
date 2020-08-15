import styled from "styled-components";

export const PokemonImage = styled.img`
  margin: 0;
  height: 28vh;
  width: 15.1vw;
  border: solid 3px black;
  background: rgb(240, 235, 241);
  margin: 0.25vh;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 31vh;

  background-color: rgb(205, 170, 238);
`;

export const ImageHeader = styled.div`
  height: 5vh;

  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ImageHeaderH3 = styled.h3`
  color: white;
  font-size: 1.8vh;
  margin: 0;
  text-transform: capitalize;
`;
export const PokeBall = styled.img`
  width: 2.5vw;
  height: 4vh;
  background: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-Wrap;
  align-items: center;
`;

export const Card = styled.div`
  background: transparent;
  height: 60vh;
  width: 60.2vw;
  display: flex;
  flex-wrap: wrap;

  border: solid 3px black;
`;

export const InfoContainer = styled.div`
  height: 28.5vh;
  width: 15.4vw;
  border: solid 2px black;
  background-color: rgb(252, 224, 106);
`;
export const Characteristics = styled.div`
  background-color: rgb(252, 224, 106);
  width: 44.6vw;
  height: 28.5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: solid 4px purple;
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
  width: auto;
  height: 30vh;
  margin: 0;
  border: solid 4px orange;
`;

export const RowContainer = styled.div`
  width: 44vw;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: start;
  align-items: center;
  border: solid 2px black;
`;

export const CardRowContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

export const AbilityName = styled.h1`
  border: solid 2px grey;
  font-size: 1.5vw;
  color: white;
  background-color: grey;
  text-align: start;
  border-radius: 16px;
`;

export const Ability = styled.h3`
  color: black;
  background-color: white;
  border-radius: 16px;
  font-size: medium;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 28vw;
  height: 8vh;
`;

export const AbilityRow = styled.div`
  width: 42vw;

  height: 10vh;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;
`;
