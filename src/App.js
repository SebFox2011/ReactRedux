import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from "./containers/ListItems";
import FormNewItem from "./containers/FormNewItem"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p> Edit <code>src/App.js</code> and save to reload.</p>
            </header>
            <div>
                <div>
                    <ListItems/>
                </div>
                <div>
                    <FormNewItem/>
                </div>
            </div>
        </div>
    );
}

export default App;
