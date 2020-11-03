const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req, res){
    res.sendfile('index.html');
});
app.post('/',function(req, res){
    console.log("post sareta")
    console.log(res);
})

http.listen(3000, function(){
    console.log('listening on *:3000');
});


io.sockets.on('connection', function(socket){
    socket.emit('message_from_server','hello world');

    socket.on('message_from_client', function(msg){
        console.log('message:',msg);
    })
})
