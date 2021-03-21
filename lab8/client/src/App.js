import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {

  const [additionalName, setAdditionalName] = useState("");
  const [searchName, setSearchName] = useState("");

  const putName = () => {
    Axios.put("http://localhost:45030/names/" + person)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error " + error);
    });
  };

  const getNames = () => {
    Axios.get("http://localhost:45030/colors/" + person)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error " + error);
    });
  };



  return (
    <div className="App">
      <input type="text" onChange={(event) => setAdditionalName(event.target.value)} />
      <button onClick={() => putName()}>Click me to test!</button>
      <input type="text" onChange={(event) => setSearchName(event.target.value)} />
      <button onClick={() => getNames()}>Click me to test!</button>
    </div>
  );
}

export default App;
