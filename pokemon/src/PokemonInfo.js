import React, { Component } from "react";

class PokemonInfo extends Component {
  async componentDidUpdate(prevProps) {
    if (prevProps.pokemons !== this.props.pokemons) {
      console.log("component did update (info)", this.props.pokemons);
      this.mapPokemonInfo(this.props.pokemons);
    }
  }

  mapPokemonInfo() {
    this.props.pokemons.map(pokemon => {
      let URL = pokemon.url;
      return <div> {this.fetchPokemonInfo(URL)}</div>;
    });
  }

  async fetchPokemonInfo(URL) {
    console.log("fetchPokemonInfo", URL);
    const results = await fetch(`${URL}`);
    const pokemonInfo = await results.json();
    console.log(pokemonInfo);
    const weight = pokemonInfo.weight;
    this.props.updateInfo(weight);
  }

  render() {
    return <div>{null}</div>;
  }
}

export default PokemonInfo;
