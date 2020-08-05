import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Pagination from "../Components/Pagination/pagination";
import CardArray from "../Components/Cards/CardArray";
import SearchBox from "../Components/SearchBox/SearchBox";
import PokemonDetails from "../Components/DetailCard/PokemonDetails";
import store from "./store";
import { Provider } from "react-redux";
import { APP, Header, PokemonLogo, Credits, Body } from "./StyledComponents";
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
              <Link to="/Pokemon-Search">
                <PokemonLogo src={logo} alt="pokemon-logo" />
              </Link>
              <Credits>Made Possible With PokéAPI!</Credits>
            </Header>
            <Switch>
              <Route exact path="/Pokemon-Search">
                <Header>
                  <SearchBox searchChange={this.searchChange} />
                  <Pagination className="pagination" />
                </Header>
                <Body>
                  <CardArray searchfield={this.state.searchfield} />
                </Body>
              </Route>
              <Route
                path="/:id"
                render={props => <PokemonDetails {...props} />}
              />
            </Switch>
          </APP>
        </Provider>
      </Router>
    );
  }
}

export default App;
