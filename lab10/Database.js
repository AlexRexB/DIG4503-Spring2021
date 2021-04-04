import MongoClient from 'mongodb';

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection - null;
    }

    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true});
        this.database = this.connection.db("<Database>");
        this.collection = this.database.collection("<Collection>");
    }

    async createOne(){
        await this.collection.insertOne({
            "firstName": "Alex",
            "lastName": "Baez",
            "favoriteColor": "Green"

        });
    }
    async readOne(){
        let result = await this.collection.findOne({
            
        })
    }

    close() {
        if(this.connection != null) {
            this.connection.close();
        }
    }
}