import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { gatherStats, abilityName, getAbility } from "../action";
import { withRouter } from "react-router-dom";
import DetailCard from "./DetailCard";

class PokemonDetails extends Component {
  async componentDidMount() {
    await this.props.getAbility(
      this.props.pokemonInfo,
      this.props.match.params.id
    );
    await this.props.gatherStats(
      this.props.pokemonInfo,
      this.props.match.params.id
    );
  }

  render() {
    const types = this.props.pokemonInfo[
      this.props.match.params.id - 1
    ].types.map(types => {
      return types.type.name;
    });
    const abilityNames = this.props.pokemonInfo[
      this.props.match.params.id - 1
    ].abilities.map(element => {
      return element.ability.name;
    });

    return (
      <DetailCard
        testing={abilityNames}
        ability={this.props.ability}
        types={types}
        pokemonNumber={this.props.match.params.id}
        stats={this.props.stats}
        statNames={this.props.statProps}
        height={this.props.pokemonInfo[this.props.match.params.id - 1]}
        weight={this.props.pokemonInfo[this.props.match.params.id - 1]}
        index={this.props.match.params.id}
        name={this.props.pokemonInfo[this.props.match.params.id - 1]}
      />
    );
  }
}

const mapStateToProps = state => ({
  pokemonInfo: state.pokemonInfo.pokemonInfo,
  abilityName: state.pokemonInfo.abilityName,
  ability: state.pokemonInfo.ability,
  stats: state.pokemonInfo.stats,
  statProps: state.pokemonInfo.statsNames,
  name: state.card.pokemons
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gatherStats,
      abilityName,
      getAbility
    },

    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
);
