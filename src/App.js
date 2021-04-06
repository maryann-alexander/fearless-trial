import React, {useState} from "react";
import './App.css';
import countapi from 'countapi-js';

countapi.visits().then((result) => {
  console.log(result.value);
});
countapi.get('https://api.countapi.xyz/get/purplecow/1ccb732e-b55a-4404-ad3f-0f99c02fe44e', 'test').then((result) => {
  return result
});
countapi.hit('https://api.countapi.xyz/update/purplecow/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/?amount=1', 'visits').then((result) => {
  return result
});

const App = () => {
  const [count, setCount] = useState(null);
  const [clicked, setClicked] = useState(false);
  const baseURL = "https://api.countapi.xyz/get/purplecow/1ccb732e-b55a-4404-ad3f-0f99c02fe44e"

  const fetchData = async () => {
    setClicked(true);
    const response = await countapi.get(baseURL, 'test').then((result) => {
      return result
    });
    setCount(response.data.value);
}

  return (
    <div className="App">
      <header className="App-header">

        <h1>Page View Count</h1>

        <div id="visits">{count}</div>

        <button onclick={fetchData}>Hit API</button>

      </header>
    </div>
  );
}

export default App;
