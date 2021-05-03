import React from 'react';
import Axios from 'axios';

class MovieList extends React.Component {
        state = {
            movies: []
        };
getMovie = () => {
    Axios.get("http://localhost:45030/movies/title")
    .then(response => {
        const movies = response.data;
        this.setState({ movies })
    })
    .catch(error => {
        console.log("Error " + error);
    })
}
render () {
    return (
        <ul>
            { this.state.movies.map(movie => <li>{movie.title}</li>)}
        </ul>
    );
}
}

export default MovieList;