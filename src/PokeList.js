import React, { Component } from "react";
import PokeItem from "./PokeItem.js";

export default class PokeList extends Component {

    render() {

        const pokeData = this.props.pokemon;
        const pokeList = pokeData.map(item => { 
            return <PokeItem pokemon={item} key={item.doesntmatter} />
    })
      return (

        <div>
            <ul className="mainDiv">
                {pokeList}
            </ul>
        </div>

                
            );
}
}