import React, { useState } from 'react';
import Axios from 'axios';

function EditMovie() {
    const [updateTitle] = useState("");
    const [updateYear] = useState("");
    const [updatePlot] = useState("");

    const patchTitle = () => {
        Axios.patch("http://localhost:45030/movies/title")
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Error " + error);
          });
    }
    const patchYear = () => {
        Axios.patch("http://localhost:45030/movies/year")
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Error " + error);
          });
    }
    const patchPlot = () => {
        Axios.patch("http://localhost:45030/movies/plot")
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Error " + error);
          });
    }
    return (
        <div className="Edit Movie">
            <input type="text" onChange={(event) => updateTitle(event.target.value)}/>
            <button onClick={() => patchTitle()}>Add New Title</button>
            <input type="text" onChange={(event) => updateYear(event.target.value)}/>
            <button onClick={() => patchYear()}>Add New Year</button>
            <input type="text" onChange={(event) => updatePlot(event.target.value)}/>
            <button onClick={() => patchPlot()}>Add Plot</button>
        </div>
    )

}
export default EditMovie;