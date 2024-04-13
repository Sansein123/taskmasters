const express = require('express');
const router = express.Router();

// Endpoint to provide backend configuration details
router.get('/config', (req, res) => {
    const port = req.socket.localPort; // Get the port on which the server is currently running
    res.json({
        message: "Backend configuration details.",
        port: port,
        baseUrl: `http://localhost:${port}`
    });
});

module.exports = router;
