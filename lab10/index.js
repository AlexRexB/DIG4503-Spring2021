import Database from './Database.js';
import Express from 'express';

const App = Express();
const port = 45030;

const d = new Database();

App.use( Express.json() );

App.put("/people/:create", (req, res) => {
    Database.createOne();
});

App.get("people/person", (req, res) => {
    Database.readOne();
});

App.listen(port);