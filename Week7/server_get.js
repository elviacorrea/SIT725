const express = require('express');
const http = require('http'); 
const { Server } = require('socket.io');
const userRoutes = require('./routers/userRoutes');
const { connectToDB } = require('./models/userModel');

const app = express();
const server = http.createServer(app); 
const io = new Server(server); 
let port = process.env.PORT || 3000;

// Middleware to handle JSON and URL-encoded requests
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', userRoutes);

// Connect to the database
connectToDB();

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle messages from the client
    socket.on('chat message', (msg) => {
        console.log('Message from client: ' + msg);
        io.emit('chat message', msg); // Broadcast the message to all connected clients
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log('Express server started on port', port);
});
