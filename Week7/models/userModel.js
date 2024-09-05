// models/userModel.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://elviacorrea0733:C2lG4te5y8s9x1Xj@cluster0.hagegs1.mongodb.net/";
let usersCollection;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToDB() {
    try {
        await client.connect();
        const db = client.db('tempConverter');
        usersCollection = db.collection('users');
        console.log("Connected to MongoDB, Collection:", usersCollection.collectionName);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

async function findUser(username) {
    return await usersCollection.findOne({ username });
}

async function insertUser(user) {
    return await usersCollection.insertOne(user);
}

module.exports = { connectToDB, findUser, insertUser };
