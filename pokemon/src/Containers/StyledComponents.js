import styled from "styled-components";

export const APP = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: rgb(189, 19, 19);
  background: linear-gradient(
    0deg,
    rgba(189, 19, 19, 1) 0%,
    rgba(80, 0, 9, 1) 60%,
    rgba(49, 143, 200, 1) 93%
  );
  background-attachment: fixed;
`;

export const Header = styled.div`
background: transparent;
display: flex;
flex-direction: column;
align-items: center;
}
`;

export const PokemonLogo = styled.img`
  height: 20vh;
  width: 20vw;
`;

export const Credits = styled.h2`
  color: white;
  font-size: 2vh;
`;

export const Body = styled.div`
  background: transparent;
  height: auto;
  width: auto;
`;
