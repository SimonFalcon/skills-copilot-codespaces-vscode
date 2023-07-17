// Create web server
var server = http.createServer(app);
server.listen(port, function() {
  console.log('Listening on port ' + port);
});

// Create socket connection
var io = require('socket.io').listen(server);

// Create socket connection
io.on('connection', function(socket) {
  console.log('Client connected to socket.io!');

  // Listen for message from client
  socket.on('message', function(message) {
    console.log('Received message from client: ' + message.text);

    // Broadcast message to all clients
    socket.broadcast.emit('message', message);
  });
});