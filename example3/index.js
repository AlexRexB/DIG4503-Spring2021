import MongoClient, { Cursor } from 'mongodb';

const URL = "mongodb+srv://JosephBaez:qXzASd476KI96jEm@cluster0.yuzwq.mongodb.net";

async function connect() {
    let connection = await MongoClient.connect(URL, { useUnifiedTopology: true});
    let database = connection.db("sample_mflix");
    let collection = database.collection("movies");
    let result = await collection.findOne({year: {$gt: 2010}, rated: "R"});
    
    cursor.toArray()
}

console.log("This line.");
connect();
console.log("And then this line.");