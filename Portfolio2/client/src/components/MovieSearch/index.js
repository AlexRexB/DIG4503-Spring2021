import React from 'react';
import Axios from 'axios';

class MovieSearch extends React.Component {
        state = {
            movies: []
        };
componentDidMount(){
    Axios.get("http://localhost:45030/movies/title")
    .then(response => {
        console.log(response)
        this.setState({ movies: response.data })
    })
    .catch(error => {
        console.log("Error " + error);
    })
}
render () {
    return (
        <div>
        <ul>
            { this.state.movies.map(movie => <li>{movie.title}</li>)}
        </ul>
        </div>
    );
}
}

export default MovieSearch;