var http = require("http")
var router = require("./router.js").router
var socketIOListen = require("./lib/chat_server.js").socketIOListen

var httpServer = http.createServer(function(request, response){
	router(request, response)
});

var port = 8080;

httpServer.listen(port);

socketIOListen(httpServer);