import Express from 'express';

const App = Express();
const port = 45030;

App.use(Express.json())

const db = new Database();

App.put("/games/:id", (req, res) =>{
    // Request parameter id.
    const id = req.params.id;

    // Request parameter id.
    const title = req.body.title;
    const rating = req.body.rating;
    const review = req.body.review;

    res.json({
        id: id,
        title: title,
        rating: rating,

    })
});

App.get("/games/:id", (req, res) =>{
    const id = req.params.id;
    res.json({game: "not found"});
});

App.patch("/games/:id", (req, res) =>{
    const id = req.params.id;

    const title = req.body.title;
    const rating = req.body.rating;
    const review = req.body.review;


});

App.delete("/games/:id", (req, res) =>{
    const id = req.params.id;

    const result = db.deleteOne(id);

    res.json({"deleted" : 0});
});