var http = require("http");
var os = require("os");
var interface = os.networkInterfaces();
http.createServer(function(req, res) {
	// var user_ip = req.connection.remoteAddress;
	console.log(interface.lo0[0].address);
	res.end();
}).listen(process.env.PORT || 8000);