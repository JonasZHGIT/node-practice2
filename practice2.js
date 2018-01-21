var http = require("http");
var os = require("os");
var interface = os.networkInterfaces();
http.createServer(function(req, res) {
	var forwardedIp = req.headers['x-real-ip'] || req.header['x-forwarded-for'];
	var user_ip = forwardedIp?forwardedIp:req.connection.remoteAddress;
	var result = {
		"ipaddress": user_ip
	};
	res.end(JSON.stringify(result));
}).listen(process.env.PORT || 8000);