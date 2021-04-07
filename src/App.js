import React, {useState} from "react";
import './App.css';
import countapi from 'countapi-js';


const App = () => {
  const [count, setCount] = useState(null);
  const [clicked, setClicked] = useState(false);

  const fetchData = async () => {
    setClicked(true);
    const response = await countapi.visits().then((result) => {
      return result.value
    });
    setCount(response);
}

  return (
    <div className="App">
      <header className="App-header">

        <h1>Page View Count</h1>

        <div id="visits">{count}</div>

        <button onClick={fetchData}>Hit API</button>

      </header>
    </div>
  );
}

export default App;
