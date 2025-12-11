const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/track', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'track.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('join-session', (sessionId) => {
      socket.join(sessionId);
      console.log(`User joined session: ${sessionId}`);
  });

  socket.on('client-connect', (sessionId) => {
      socket.join(sessionId);
      console.log(`Client connected to session: ${sessionId}`);
      io.to(sessionId).emit('client-status', 'connected');
  });

  socket.on('send-location', (data) => {
      const { sessionId, latitude, longitude } = data;
      io.to(sessionId).emit('receive-location', { latitude, longitude });
  });

  socket.on('send-frame', (data) => {
      const { sessionId, image } = data;
      io.to(sessionId).emit('receive-frame', image);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
