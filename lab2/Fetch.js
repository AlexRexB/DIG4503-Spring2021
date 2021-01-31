import axios from 'axios';

class Fetch {
    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;
    }
    fetch () {
        axios('https://pokeapi.co/api/v2/pokemon/ditto')
    }
}