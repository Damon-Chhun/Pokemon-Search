import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Pagination from "../Components/Pagination/pagination";
import CardArray from "../Components/Cards/CardArray";
import SearchBox from "../Components/SearchBox/SearchBox";
import PokemonDetails from "../Components/PokemonDetails";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import styled from "styled-components";
import { load, save } from "redux-localstorage-simple";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  load({ states: ["card", "Pagination"] }),
  composeWithDevTools(
    applyMiddleware(...middleware, save({ states: ["card", "Pagination"] }))
  )
);

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
      <Router>
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
                <Route path="/Test">
                  <PokemonDetails />
                </Route>
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
