var socketIO = require('socket.io')

var socketIOListen  = function(server){
	var io = socketIO.listen(server)
	io.sockets.on("connection", function(socket){
		
		socket.on("message", function(data){
			io.sockets.emit("message", {
				text: data.text
			})
		})
		
	  socket.on('mousemove', function (data) {
      socket.broadcast.emit('moving', data);
    });
	})
}
exports.socketIOListen = socketIOListen