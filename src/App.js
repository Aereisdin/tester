import React from "react";
import './App.css';
import Navi from './Components/Navigation'

function App() {
  return (    
    <div className="App">
      <Navi/>
      <header className="App-header">
        <img src="https://adventuresmithexplorations.com/wp-content/uploads/2023/03/ase20_Side_Full-600.jpg" className="App-logo" alt="logo" />
        <div className="Hello">
          Just messing around.
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener"
        >
          Keys to the Kingdom yay!
        </a>
      </header>
    </div>
  );
}

export default App;
