// const port = 3040;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const uri = "mongodb+srv://elviacorrea0733:C2lG4te5y8s9x1Xj@cluster0.hagegs1.mongodb.net/";  // Make sure this is secure in production
let port = process.env.PORT || 3000;
let usersCollection;

app.use(express.static(__dirname + '/public'));  // Serving static files
app.use(express.json());  // Parsing JSON bodies
app.use(express.urlencoded({ extended: false }));  // Parsing URL-encoded bodies

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        await client.connect();
        const db = client.db('tempConverter');  // Connect to the correct database
        usersCollection = db.collection('users');  // Use the correct collection
        console.log("Connected to MongoDB, Collection:", usersCollection.collectionName);
    } catch (ex) {
        console.error("Error connecting to MongoDB:", ex);
    }
}

// Signup Route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    console.log('POST request to /signup with data:', { username, password });

    if (!usersCollection) {
        console.error('Database connection not established');
        return res.status(500).json({ message: 'Database connection not established' });
    }

    try {
        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const result = await usersCollection.insertOne({ username, password });
        console.log('User signed up:', result);
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'Error signing up user' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('POST request to /login with data:', { username, password });

    if (!usersCollection) {
        console.error('Database connection not established');
        return res.status(500).json({ message: 'Database connection not established' });
    }

    try {
        const user = await usersCollection.findOne({ username, password });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log('Login successful for user:', username);
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error during login' });
    }
});

// Start the server and connect to the database
app.listen(port, () => {
    console.log('Express server started on port', port);
    runDBConnection();
});
