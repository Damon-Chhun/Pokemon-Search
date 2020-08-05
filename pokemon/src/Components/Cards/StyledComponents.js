import styled from "styled-components";

export const CardInformation = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content center; 
    align-content: center;
    
`;
export const Container = styled.div`
  &:hover {
    animation: float 3s ease-in-out infinite;
    border-radius 16px;
  }
`;
export const Cards = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    144deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(149, 214, 238, 1) 33%,
    rgba(0, 145, 210, 1) 100%
  );
  border: solid 4px white;
  border-radius: 12px;
  height: 45vh;
  width: 17vw;
  margin: 2vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
`;

export const H1 = styled.h1`
  font-size: 3vh;
  text-align: center;
  text-transform: capitalize;
`;

export const H3 = styled.h3`
  font-size: 2vh;
  text-align: center;
  text-transform: capitalize;
`;

export const PokemonImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 6vw;
  height: 15vh;
`;
