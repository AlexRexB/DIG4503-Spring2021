import MongoClient from 'mongodb';

const URL = "mongodb+srv://JosephBaez:qXzASd476KI96jEm@cluster0.yuzwq.mongodb.net"

class Database {
    constructor(database, collection){
        this.connection = null;
        this.database = null;
        this.collection = null;


    }

    connect(){
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true});
        this.database = this.connection.db("lab11");
        this.collection = this.database.collection("books");
    }

    close(){
        
    }

    createOne(){
        
    }

    readOne(){
        
    }
    readMany(){

    }
    updateOne(){

    }
    deleteOne(){
        if(this.collection != null) {
            const result = await this.collection.deleteOne({"ISBN": ISBN});
            return {"books": result.deletedCount};
        } else {
            return {"books": 0};
        }
    }

}

export default Database;