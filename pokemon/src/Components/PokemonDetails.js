import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  text-align: center;
`;
class PokemonDetail extends Component {
  render() {
    const { match } = this.props;
    return <H1>{`${match.params.index}`}</H1>;
  }
}

export default PokemonDetail;
