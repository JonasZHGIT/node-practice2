var http = require("http");

http.createServer(function(req, res) {
	var user_ip = req.connection.remoteAddress;
	res.end(user_ip);
}).listen(process.env.PORT || 8000);