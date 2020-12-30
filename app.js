var app = require('express')();
var http = require('http').createServer(app);
var io = require ('socket.io')(http);
var mongo = require('mongodb');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Hao", message: "Hello" };
  dbo.collection('chats').insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

io.on('connection', (socket)=>{
  let chat = db.collection ('chats');
})

//Get chats from mongo collection

chat.find().limit(100).sort({id:1}).toArray(function(err,res){
  if(err){
    throw err;
  }
  //Emit the messages
  socket.emit('output', res);
});

//handle input events
socket.on('input', (data)=>{
  let name =data.name;
  let message = data.message;

  //check for name and message

  if(name == '' || message == ''){
    alert('Please enter name and message');
  }else {
    chat.insert({name: name, message: message}, function(){
    io.emit('output', [data]);
    });
  };

});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) =>{
    console.log ('a user connected');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  io.on('connection', (socket)=>{
      socket.on('chat message', (msg)=>{
          console.log('message: '+ msg);
      });
  });

  io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

  io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

http.listen(3000, () => {
  console.log('listening on *:3000');
});