import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { gatherStats } from "../action";
import { withRouter } from "react-router-dom";
import DetailCard from "./DetailCard";

class PokemonDetails extends Component {
  componentDidMount() {
    this.props.gatherStats(this.props.pokemonInfo, this.props.match.params.id);
  }

  componentWillUnmount() {}

  render() {
    const types = this.props.pokemonInfo[
      this.props.match.params.id - 1
    ].types.map(types => {
      return types.type.name;
    });
    return (
      <DetailCard
        pokemonNumber={this.props.match.params.id}
        stats={this.props.stats}
        statNames={this.props.statProps}
        height={this.props.pokemonInfo[this.props.match.params.id - 1].height}
        weight={this.props.pokemonInfo[this.props.match.params.id - 1].weight}
        types={types}
        index={this.props.match.params.id}
      />
    );
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
  connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
);
