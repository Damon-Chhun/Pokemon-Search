import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Pagination from "./pagination";
import CardArray from "./CardArray";

class App extends Component {
  state = {
    pokemons: [],
    offset: 0,
    offsetChanged: false,
    limit: 20
  };

  nextPage = () => {
    let offset =
      this.state.offset <= 131 ? this.state.offset + 20 : this.state.offset;
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
    this.setState({
      pokemons,
      offsetChanged: !this.state.offsetChanged
    });
  };

  render() {
    return (
      <div className="App">
        <header className=" App-Header">
          <img src={logo} className="App-Logo" alt="pokemon-logo" />
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
            updateAPI={this.updateAPI}
            offset={this.state.offset}
          />
        </div>
      </div>
    );
  }
}

export default App;
