import React, { Component } from "react";
import PokeItem from "./PokeItem.js";
import pokedata from "./data.js";

export default class PokeList extends Component {
    state = { selected:null };
    render() {
        const pukemon = pokedata.map(critters => <PokeItem key={critters._id} image={critters} />);
        console.log(pukemon)

      return (

        <div>
            <ul>
                {pukemon}
            </ul>
        </div>

                
            );
}
}