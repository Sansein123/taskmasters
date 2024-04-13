require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const taskRoutes = require('./routes/tasks');
const infoRoutes = require('./routes/info'); // Include the info route

const app = express();
let port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/tasks', taskRoutes);
app.use('/info', infoRoutes); // Mount the info route

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port);
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.log(`Port ${port} is already in use, switching to a new port.`);
        port = 0; // Listen on a random available port
        server.listen(port);
    } else {
        console.error(`Failed to start the server on port ${port}: ${error}`);
        process.exit(1);
    }
});
server.on('listening', () => {
    const addr = server.address();
    console.log(`Server is listening on port ${addr.port}`);
});

module.exports = app;
