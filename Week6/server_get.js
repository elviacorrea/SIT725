// server_get.js
const express = require('express');
const userRoutes = require('./routers/userRoutes');
const { connectToDB } = require('./models/userModel');

const app = express();
let port = process.env.PORT || 3000;

// Middleware to handle JSON and URL-encoded requests
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', userRoutes);

// Connect to the database and start the server
app.listen(port, () => {
    console.log('Express server started on port', port);
    connectToDB();  // Initialize the database connection
});
module.exports = app; 