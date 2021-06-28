import React, { Component } from "react";
import "./Pokecard.css";
//API for images
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
//{id}.png takes a format like 001,002,010... so i write a function that formats to id compatible with this
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}
export default Pokecard;
