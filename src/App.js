// importing react
import React, { Component } from 'react';
// importing my files
import Header from "./Header.js";
import PokeList from "./PokeList.js";
//importing from npm for api
import request from 'superagent';
// styling
import './App.css';

export default class APP extends Component {
  state = { pokeData: [] };

  async componentDidMount() {
    const pokeData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')

    this.setState({ pokeData: pokeData.body.results})
  };
  
render() {

  return (
    <div>
      <Header/>
      <PokeList pokemon={this.state.pokeData}/>
    </div>
  );
}
}