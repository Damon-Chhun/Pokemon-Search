import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Pagination from "../Components/Pagination/pagination";
import CardArray from "../Components/Cards/CardArray";
import SearchBox from "../Components/SearchBox/SearchBox";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
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
      <Provider store={store}>
        <div className="App">
          <header className=" App-Header">
            <img src={logo} className="App-Logo" alt="pokemon-logo" />
            <h2>Made Possible With PokeAPI !</h2>
            <SearchBox searchChange={this.searchChange} />
          </header>

          <Pagination />

          <div className="cardList">
            <CardArray searchfield={this.state.searchfield} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
