//Dependencies
var express = require ("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var PORT = process.env.PORT || 4000;

//Route to chat box
app.get('/', function(req, res){
  res.sendFile(__dirname + '/chatIndex.html');
});

//console.log the chat message
// io.on('connection', function(socket){
//   socket.on('message', function(msg){
//     console.log('message: ' + msg);
//   });
// });

//socket.io connect/disconnect listener
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('message', function(msg){
    console.log('message: ' + msg);
    io.emit("message", msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});



//Start the server
http.listen(PORT, function(){
  console.log("chatServer is lisenting on ", PORT);
});