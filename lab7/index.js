import Express from 'express';

const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get("/people/:person", (req, res) => {

    let result = {name: "Not Found"};

    names.forEach((value) => {
        if(req.params.names == value) {
            result = value;
        }
    });

    res.json(result);
});

App.get("/search/:name", (req, res) => {

    let result = {search: "not found"};

    arrayResult = []

    names.forEach((value) => {
        if(value.name == req.params.names) {
            arrayResult.push(value);
        }
    });

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
})