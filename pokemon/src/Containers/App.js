import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Pagination from "../Components/pagination";
import CardArray from "../Components/CardArray";
import PokemonInfo from "../Components/PokemonInfo";
import SearchBox from "../Components/SearchBox";

class App extends Component {
  state = {
    pokemons: [],
    offset: 0,
    offsetChanged: false,
    weight: [],
    searchfield: ""
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

  updateInfo = weight => {
    console.log(this.state.info);
    this.setState({
      weight: [...this.state.weight, weight]
    });
  };

  searchChange = event => {
    this.setState({
      searchfield: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className=" App-Header">
          <img src={logo} className="App-Logo" alt="pokemon-logo" />
          <h2>Made Possible With PokeAPI !</h2>
          <SearchBox searchChange={this.searchChange} />
        </header>

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
            searchfield={this.state.searchfield}
            updateAPI={this.updateAPI}
            offset={this.state.offset}
            weight={this.state.weight}
          />
          <PokemonInfo
            updateInfo={this.updateInfo}
            pokemons={this.state.pokemons}
          />
        </div>
      </div>
    );
  }
}

export default App;
