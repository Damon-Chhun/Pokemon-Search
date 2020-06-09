import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Pagination from "./pagination";
import CardArray from "./CardArray";
import PokemonInfo from "./PokemonInfo";
import SearchBox from "./SearchBox.js";

class App extends Component {
  state = {
    pokemons: [],
    offset: 0,
    offsetChanged: false,
    type: [],
    weight: []
  };

  nextPage = () => {
    let offset =
      this.state.offset <= 346 ? this.state.offset + 20 : this.state.offset;
    this.setState({
      ...this.state,
      offset,
      offsetChanged: !this.state.offsetChanged
    });
    console.log("offset", this.state.offset);
  };

  prevPage = () => {
    let offset =
      this.state.offset !== 0 ? this.state.offset - 20 : this.state.offset;
    this.setState({
      offset
    });
  };

  updateAPI = pokemons => {
    console.log(pokemons, "updateAPI");
    this.setState({
      pokemons,
      offsetChanged: !this.state.offsetChanged
    });
  };

  updateWeight = weight => {
    console.log(this.state.weight);
    this.setState({
      weight: [...this.state.weight, weight]
    });
  };

  /* updateTypes = types => {
    console.log(this.state.type, "TYPES");
    this.setState({
      type: [...this.state.type, [types]]
    });
  }; */

  render() {
    return (
      <div className="App">
        <header className=" App-Header">
          <img src={logo} className="App-Logo" alt="pokemon-logo" />
        </header>

        <SearchBox />
        <Pagination
          updateAPI={this.updateAPI}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          offset={this.state.offset}
          offsetChanged={this.state.offsetChanged}
        />

        <div className="cardList">
          <CardArray
            pokemons={this.state.pokemons}
            updateAPI={this.updateAPI}
            offset={this.state.offset}
            number={this.state.number}
            weight={this.state.weight}
            types={this.state.type}
          />
          <PokemonInfo
            updateWeight={this.updateWeight}
            pokemons={this.state.pokemons}
            // updateTypes={this.updateTypes}
          />
        </div>
      </div>
    );
  }
}

export default App;
