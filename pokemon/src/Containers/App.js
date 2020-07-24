import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Pagination from "../Components/Pagination/pagination";
import CardArray from "../Components/Cards/CardArray";
import SearchBox from "../Components/SearchBox/SearchBox";
import PokemonDetails from "../Components/PokemonDetails";
import store from "./store";

import { Provider } from "react-redux";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  state = {
    searchfield: ""
  };

  searchChange = event => {
    this.setState({
      searchfield: event.target.value
    });
  };

  render() {
    return (
      <Router basename="/">
        <Provider store={store}>
          <APP>
            <Header>
              <Link to="/">
                <PokemonLogo src={logo} alt="pokemon-logo" />
              </Link>
              <Credits>Made Possible With PokéAPI!</Credits>
              <SearchBox searchChange={this.searchChange} />
              <Pagination className="pagination" />
            </Header>
            <Switch>
              <Body>
                <Route exact path="/">
                  <CardArray searchfield={this.state.searchfield} />
                </Route>
                <Route
                  path="/:id"
                  render={props => <PokemonDetails {...props} />}
                />
              </Body>
            </Switch>
          </APP>
        </Provider>
      </Router>
    );
  }
}

export default App;

const APP = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: rgb(189, 19, 19);
  background: linear-gradient(
    0deg,
    rgba(189, 19, 19, 1) 0%,
    rgba(80, 0, 9, 1) 60%,
    rgba(49, 143, 200, 1) 93%
  );
  background-attachment: fixed;
`;

const Header = styled.div`
background: transparent;
display: flex;
flex-direction: column;
align-items: center;
}
`;

const PokemonLogo = styled.img`
  height: 20vh;
  width: 20vw;
`;

const Credits = styled.h2`
  color: white;
  font-size: 2vh;
`;

const Body = styled.div`
  background: transparent;
  height: auto;
  width: auto;
`;
