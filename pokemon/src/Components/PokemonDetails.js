import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { gatherStats } from "./action";
import { withRouter } from "react-router-dom";

const H1 = styled.h1`
  color: white;
  text-align: center;
`;
class PokemonDetail extends Component {
  componentDidMount() {
    this.props.gatherStats(this.props.pokemonInfo, this.props.match.params.id);
  }

  componentWillUnmount() {}

  render() {
    if (this.props.stats === undefined) {
      return <H1>Testing</H1>;
    } else {
      return this.props.stats.map((numbers, index) => {
        return (
          <H1>
            {this.props.statProps[index]}:{numbers}
          </H1>
        );
      });
    }
  }
}

const mapStateToProps = state => ({
  pokemonInfo: state.pokemonInfo.pokemonInfo,
  stats: state.pokemonInfo.stats,
  statProps: state.pokemonInfo.statsNames
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gatherStats
    },

    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
);
