import React, { Component } from "react";
import styled from "styled-components";

class Card extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.weight !== this.props.weight &&
      prevProps.types !== this.props.types
    ) {
      console.log("checking if card updated");
      this.CardInfo();
    }
  }
  CardInfo() {
    console.log("test");
  }

  render() {
    return (
      <div>
        <CardInfo>
          <div className=" Card-Header ">
            <h1> {this.props.name} </h1>
            <h3> ID: {this.props.index} </h3>
          </div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`}
            alt="pokemon"
          />
          <h3>Type: {this.props.types} </h3>
          <h3>Weight: {this.props.weight} </h3>
        </CardInfo>
      </div>
    );
  }
}

export default Card;

const CardInfo = styled.div`
  display: grid;
  justify-items: center;
  background-color: #dde5ff;
  border-radius: 12px;
`;
