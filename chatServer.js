//Dependencies
var express = require ("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
// var moment = require('moment-timezone');
// moment().tz("America/New_York").format();

var PORT = process.env.PORT || 4000;

var user = "nat";

app.use(express.static('public'));

//socket.io connect/disconnect listener
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('message', function(msg){
 	var sentMsg = user + ": " + msg
    io.emit("message", sentMsg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

Route to chat box
app.get('/', function(req, res){
  res.sendFile(__dirname + '/chatIndex.html');
});

console.log the chat message
io.on('connection', function(socket){
  socket.on('message', function(msg){
    console.log('message: ' + msg);
  });
});

function sqlChat(chatText, chatUser){	
    var chatTime; // = moment.js timestamp
    var chatUser; // = user name
    var chatObj = {
      text: chatText,
      time: chatTime,
      user: chatUser
    }
}



//Start the server
http.listen(PORT, function(){
  console.log("chatServer is lisenting on ", PORT);
});