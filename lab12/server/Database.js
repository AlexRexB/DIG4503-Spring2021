import MongoClient from 'mongodb';

const URL = "mongodb+srv://JosephBaez:qXzASd476KI96jEm@cluster0.yuzwq.mongodb.net"

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;


    }

    async connect(){
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true});
        this.database = this.connection.db("lab11");
        this.collection = this.database.collection("books");
    }

    close(){
        if(this.connection != null) {
            this.connection.close();
        }
    }

   async createOne(ISBN){
       let createdResult = null;

        if (this.collection != null) {
            createdResult = await this.collection.insertOne();
        }
    }

    readOne(){
        if(this.collection != null) {
            const result = await this.collection.readOne({"ISBN": ISBN});
            return {"book": result};
        } else {
            return {"book": "not found"};
        }
        
        
    }
    readMany(){
        if(this.collection != null) {
            const result = await this.collection.readOne({"ISBN": ISBN});
            return {"books": result};
        } else {
            return {"books": "not found"};
        }

    }
    updateOne(){
        if(this.collection != null) {
            const result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"title":title}});
        }
        
    }
    async deleteOne(){
        if(this.collection != null) {
            const result = await this.collection.deleteOne({"ISBN": ISBN});
            return {"books": result.deletedCount};
        } else {
            return {"books": 0};
        }
    }

}

export default Database;