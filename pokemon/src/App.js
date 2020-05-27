import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className=" App-Header">
          <img src={logo} className="App-Logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
