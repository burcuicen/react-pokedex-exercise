import React, { Component } from "react";
import Pokegame from "./Pokegame";
import "./App.css";
//Pokedex is the set of Pokecards, so i implemented Pokedex to show in main page, both Pokecards and Pokedex

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}
export default App;
