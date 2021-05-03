import React, { useState } from 'react';
import Axios from 'axios';

function DeleteMovie(){
        const [removeTitle] = useState("");

const deleteMovie = () => {
    Axios.delete("http://localhost:45030/movies/title")
    .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error " + error);
      });
}
    return (
      <div>
            <input type="text" onChange={(event) => removeTitle(event.target.value)} />
          <button onClick={() => deleteMovie()}>Click to delete Movie By Title</button>
      </div>
    );

}

export default DeleteMovie;