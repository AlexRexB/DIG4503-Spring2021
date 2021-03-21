import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

let names = [
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

App.put("people/:person", (req, res) => {
    let person = req.params.person;
    // Add to the internal array.
    names.push(person)
    // Return the name just created.
    res.json({person: person});
});
//read
App.get("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = {person: "not found"};
    names.forEach(value => {
        if(value == person) {
            result = {person: person};
        }
    });
    res.json(result);
});

App.get("/search/:name", (req, res) => {
    let person = req.params.person;
    names.filter(value => value.includes(person));
    res.json({search: [names]});
});

App.listen(port, () => {
    console.log("The server is Listening!")
});