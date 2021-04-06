import React from "react";
import './App.css';
import countapi from 'countapi-js';

countapi.visits().then((result) => {
  console.log(result.value);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>Page View Count</p>

        <div id="visits">...</div>

        <button onclick="clicked()">Hit API</button>

      </header>
    </div>
  );
}

export default App;
