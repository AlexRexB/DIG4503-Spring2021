import Database from './Database.js';
import CORS from 'cors';
import Express from 'express';

// Create Express server
const App = Express();
// Save port number
const port = 45030;

App.use(CORS());

App.use(Express.json());

// Create a database object
const d = new Database();

// Making sure we
//  have access to Database's connection
//  and collection properties later.
d.connect();

// PUT -> d.createOne() -> collection.insertOne()
App.put("/movies/:id", (req, res) => {
    const id = req.params.id;

    const title = req.body.title;
    const year = req.body.year;
    const plot = req.body.plot;

    const result = d.createOne({
        id: id,
        title: title,
        year: year,
        plot: plot});

        res.json(result);
});

// GET -> d.readOne() -> collection.findOne()
App.get("/movies/:id", (req, res) => {
    const id = req.params.id;
    

});


// PATCH -> d.updateOne() -> collection.updateOne()
App.patch("/movies/:id", (req, res) => {
    const id = req.params.id;

    const result = d.updateOne(id);

    res.json(result)


});

// DELETE -> d.deleteOne() -> collection.deleteOne()
App.delete("/movies/:id", (req, res) => {
    const id = req.params.id;

    const result = d.deleteOne({id});

    res.json(result);
});

// Listen on the port for HTTP communication
App.listen(port, () => {
    console.log("Server running!");
})