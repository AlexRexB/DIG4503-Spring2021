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
        this.database = this.connection.db("portfolio2");
        this.collection = this.database.collection("JosephBaez");
    }

    close(){
        if(this.connection != null) {
            this.connection.close();
        }
    }

    async createOne(document){
        let createdResult = null;
 
         if (this.collection != null) {
             createdResult = await this.collection.insertOne(document);
         }
         return createdResult;
     }
   
   
    async updateOne(query, update){
       let updatedResult = null;

        if (this.collection != null) {
            updatedResult = await this.collection.updateOne(query, {$set: update});
        }
        return updatedResult;
    }

    async readOne(query){
        let foundDocument = null;

        if(this.collection != null) {
            foundDocument = await this.collection.readOne({query});
        } 
        return foundDocument;
        
    }
    async readMany(query){
        let foundDocuments = null;

        if(this.collection != null) {
            foundDocuments = await this.collection.find(query).toArray();
        } 
        return foundDocuments;

    }
    
    async deleteOne(id){
        if(this.collection != null) {
            const result = await this.collection.deleteOne(id);
            return {"movies deleted": result.deletedCount};
        } else {
            return {"movies deleted": 0};
        }
    }

}

export default Database;