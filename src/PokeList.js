import React, { Component } from "react";
import PokeItem from "./PokeItem.js";

export default class PokeList extends Component {

    render() {

        const { pokemon } = this.props;
        const pokeList = pokemon.map(item => { 
            return <PokeItem pokemon={item} />
    })
      return (
        <ul className="mainDiv">
            {pokeList}
        </ul>

        )
    }
}