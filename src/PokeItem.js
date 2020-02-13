import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        console.log(this.props.pokemon)
        return ( 
        <li>

            {/* Pokemon Name */}
            <div className="pokemon-name">
                <h2>{this.props.pokemon.pokemon}</h2>
            </div>

            {/* Pokemon Image */}
            <div id="image" className="pokemon-image">
                <img src={this.props.pokemon.url_image}/>
            </div>

            {/* Pokemon Type */}
            <div>
                <p className="pokemon-type">Type: {this.props.pokemon.type_1}</p>
            </div>

            {/* Pokemon Speed */}
            <div>
                <p className="pokemon-speed">Speed: {this.props.pokemon.speed}</p>
            </div>

        </li>
        )
    }
}