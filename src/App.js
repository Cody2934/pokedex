import React from 'react';
import './App.css';
import Header from "./Header.js";
import PokeList from "./PokeList.js";
import PokeItem from "./PokeItem.js";
// import request from 'superagent';

function App() {
  return (
    <div>
      <Header/>
      <PokeList/>
      {/* <PokeItem/> */}
    </div>
  );
}

export default App;
