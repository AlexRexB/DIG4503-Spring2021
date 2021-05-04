import React, { useState } from 'react';
import Axios from 'axios';

function MovieSearch () {
        const [searchMovie, setSearchMovie] = useState("");
        
const getMovie = () => {
    Axios.get("http://localhost:45030/movies/title")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log("Error " + error);
    })
}
    return (
        <div>
            <button onClick={() => getMovie()}>Show Movie List</button>
        <ul>
            { this.state.movies.map(movie => <li>{movie.title}</li>)}
        </ul>
        </div>
    );

}

export default MovieSearch;