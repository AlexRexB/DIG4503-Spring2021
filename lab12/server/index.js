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
App.put("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;
    const title = req.body.title;
    const author = req.body.author;
    const rating = req.body.rating;

    const result = d.createOne({
        ISBN: ISBN,
        title: title,
        author: author,
        rating: rating
    });

    res.json(result)
});

// GET -> d.readOne() -> collection.findOne()
App.get("/books/:ISBN", (req, res) => {
    const ISBN = req.query.ISBN;

    const document = readOne(ISBN);

    res.json(document);



});

// POST -> One or more database methods
App.post("/books/search", (req, res) => {
    const ISBN = req.params.request;

    const title = req.body.title;
    const author = req.body.author;


});

// PATCH -> d.updateOne() -> collection.updateOne()
App.patch("/books/:ISBN", (req, res) => {
    const ISBN = req.params.request;

    const title = req.body.title;
    const author = req.body.author;
    const rating = req.body.rating;
    
    const result = d.updateOne(ISBN);

    res.json(result)


});

// DELETE -> d.deleteOne() -> collection.deleteOne()
App.delete("/books/:ISBN", (req, res) => {
    const ISBN = req.params.request;

    const result = d.deleteOne(ISBN);

    res.json(result)
});

// Listen on the port for HTTP communication
App.listen(port, () => {
    console.log("Server running!");
})