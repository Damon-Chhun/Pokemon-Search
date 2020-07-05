import React from "react";
import styled from "styled-components";
import "../../Containers/App.css";

const CardInfo = styled.div`
  display: grid;
  justify-items: center;
  background-color: #dde5ff;
  border-radius: 12px;
`;

const Card = ({ name, index, number, weight, types }) => {
  const type = types || [];
  // console.log(type, "TYPE CHECK");
  return (
    <div>
      <CardInfo className="CardInfo">
        <div className="Card-Header">
          <h1> {name} </h1>
        </div>
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
    </div>
  );
};

export default Card;
