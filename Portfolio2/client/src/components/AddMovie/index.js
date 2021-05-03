import React, { useState } from 'react';
import Axios from 'axios';

function AddMovie() {
    const [setNewTitle] = useState("");
    const [setNewYear] = useState("");
    const [setNewPlot] = useState("");

    const putTitle = () => {
        Axios.put("http://localhost:45030/movies/title")
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Error " + error);
          });
    }
    const putYear = () => {
        Axios.put("http://localhost:45030/movies/year")
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Error " + error);
          });
    }
    const putPlot = () => {
        Axios.put("http://localhost:45030/movies/plot")
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Error " + error);
          });
    }
    return (
        <div className="Added Movies">
            <input type="text" onChange={(event) => setNewTitle(event.target.value)}/>
            <button onClick={() => putTitle()}>Add New Title</button>
            <input type="text" onChange={(event) => setNewYear(event.target.value)}/>
            <button onClick={() => putYear()}>Add New Year</button>
            <input type="text" onChange={(event) => setNewPlot(event.target.value)}/>
            <button onClick={() => putPlot()}>Add Plot</button>
        </div>
    )

}
export default AddMovie;