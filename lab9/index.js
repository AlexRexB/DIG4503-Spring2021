import MongoClient from 'mongodb';

const URL = "mongodb+srv://JosephBaez:qXzASd476KI96jEm@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, { useUnifiedTopology: true })
.then(connection => {
    // Select the database.
    let database = connection.db("sample_airbnb");
    
    // Select the collection.
    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({"review_scores.review_scores_rating": {$gte: 99}, beds: {$gte: 5}, price: {$lte: 200}});

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {

        connection.close();
    });
})
.catch(error => {
    // Connection failed for any number of reasons.
    console.log("Error: " + error);
});