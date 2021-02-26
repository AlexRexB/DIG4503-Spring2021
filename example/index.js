import Express from 'express';

const App = Express();
const port = 45030;


const cat = {
    color: "orange",
    name: "whisky"
};

App.get("/", function(req, res) {
    res.json(cat);
});

App.listen(port, function() {
    console.log("Server is coming!");
});