const express = require('express');
const https = require('https');
const fs = require('fs');
const socketIO = require('socket.io');
const app = express();

// Memuat sertifikat SSL
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

// Membuat server HTTPS
const server = https.createServer(options, app);
const io = socketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log(`A user connected: ${socket.id}`);

    // Menangani offer dari peer
    socket.on('offer', (offer) => {
        socket.broadcast.emit('offer', offer);
    });

    // Menangani answer dari peer
    socket.on('answer', (answer) => {
        socket.broadcast.emit('answer', answer);
    });

    // Menangani ICE candidate
    socket.on('iceCandidate', (candidate) => {
        socket.broadcast.emit('iceCandidate', candidate);
    });

    // Menangani event emoji
    socket.on('emoji', (emoji) => {
        // Mengirim emoji ke semua pengguna (termasuk pengirim)
        io.emit('emoji', emoji);
    });

    // Menangani pesan chat
    socket.on('chatMessage', (message) => {
        socket.broadcast.emit('chatMessage', message);
    });

    // Menangani disconnect
    socket.on('disconnect', () => {
        console.log(`A user disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});
