import Express from 'express';

const App = Express();
const port = 45030;

const person = {
    name: "alex",
    color: "green"
};

App.get('/', function (req, res) {
    res.json(person)
  })

App.listen(port, function() {
    console.log("Hello World!");
});