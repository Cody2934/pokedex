import React, { Component } from 'react'
import pokedata from './data.js';

export default class PokeItem extends Component {
    render() {
        console.log(this.props.image)
        return ( 
        <li key= {pokedata._id}>

            {/* Pokemon Name */}
            <div className="pokemon-name">
                <h2>{this.props.image.pokemon}</h2>
            </div>

            {/* Pokemon Image */}
            <div className="pokemon-image">
                <img src={this.props.image.url_image}/>
            </div>

            {/* Pokemon Type */}
            <div>
                <p className="pokemon-type">Type: {this.props.image.type_1}</p>
            </div>

            {/* Pokemon Speed */}
            <div>
                <p className="pokemon-speed">Speed: {this.props.image.speed}</p>
            </div>

        </li>
        )
    }
}