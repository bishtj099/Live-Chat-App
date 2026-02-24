const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// HTML file ko dikhane ke liye
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Chat connection logic
io.on('connection', (socket) => {
  console.log('Ek user jud gaya!');
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Sabko message bhejo
  });
});

server.listen(3000, () => {
  console.log('Server chal raha hai: http://localhost:3000');
});
