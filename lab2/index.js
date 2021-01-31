import './Fetch.js';

axios('https://pokeapi.co/api/v2/pokemon' + null)

    .then( (response) => {
        const pokemon = response.data;

        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    .catch( error => console.log("Error: " + error));

