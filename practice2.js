var http = require("http");
var os = require("os");
var interface = os.networkInterfaces();
http.createServer(function(req, res) {
	// var user_ip = req.connection.remoteAddress;
	var result = {
		"ipaddress": interface.lo[0].address
	};
	res.end(JSON.stringify(result));
}).listen(process.env.PORT || 8000);