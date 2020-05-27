import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Card from "./Card";

class App extends Component {
  state = {
    pokemons: [],
    pokemonInfo: []
  };

  async componentDidMount() {
    try {
      const results = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const pokemon = await results.json();
      this.setState({
        pokemons: pokemon.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.pokemons[1]);
    return (
      <div className="App">
        <header className=" App-Header">
          <img src={logo} className="App-Logo" alt="pokemon-logo" />
        </header>
        <Card pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
