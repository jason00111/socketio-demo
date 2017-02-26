var app = require('express')()
var server = require('http').createServer(app);
var io = require('socket.io')(server)

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html')
})

// This sets up a listener for a 'connection' message
// which is automatically sent from the client when a new client connects
io.on('connection', function (client) {
  // This function gets run whenever a 'connection' message is recieved
  // 'client' is an object representing a particular client
  console.log('A client connected')

  // Send a 'welcome' message to that particular client
  client.emit('welcome')

  // Send a 'newClientConnected' message to all clients
  // The client id is sent along with the message as data
  io.emit('newClientConnected', client.id)

  // This sets up a listener for a 'makeAnnoucement' message
  client.on('makeAnnouncement', function (data) {
    // This function gets run whenever a 'makeAnnoucement' message is recieved
    // 'data' is the data that was sent along with the message

    // Send an 'announcement' message to all clients with data 'data'
    io.emit('announcement', data)
  })

  // This sets up a listener for a 'disconnect' message
  // which is automatically sent when a client disconnects
  client.on('disconnect', function () {
    // Send a 'clientDisconnected' message to all clients
    // The id of the client who disconnected is sent as data with the message
    io.emit('clientDisconnected', client.id)
  })
})

server.listen(3000)
