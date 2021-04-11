import MongoClient from 'mongodb';

const URL = "mongodb+srv://JosephBaez:qXzASd476KI96jEm@cluster0.yuzwq.mongodb.net"

class Database {
    constructor(database, collection){
        this.connection = null;


    }

    connect(){

    }

    close(){
        
    }

    createOne(){
        
    }

    readOne(){
        
    }

    async updateOne() {
        if(this.collection != null) {
            const result = await this.collection.updateOne({"id": id}, {$set: {"title":title}});
        } else {
            return null;
        }
    }

    async deleteOne(id){
        if(this.collection != null) {
            const result = await this.collection.deleteOne({"id": id});
            return {"deleted": result.deletedCount};
        } else {
            return {"deleted": 0};
        }
    }
}

export default Database;