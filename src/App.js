import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from "./containers/ListItems";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>          Edit <code>src/App.js</code> and save to reload.</p>
      </header>
      <div>
        <ListItems/>
      </div>
    </div>
  );
}

export default App;
