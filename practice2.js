var http = require("http");
var useragent = require("express-useragent");

http.createServer(function(req, res) {
	var forwardedIp = req.headers['x-real-ip'] || req.headers['x-forwarded-for'];
	var user_ip = forwardedIp?forwardedIp:req.connection.remoteAddress;
	var ua = useragent.parse(req.headers['user-agent']);
	var locale = req.headers['accept-language'];
	var result = {
		"ipaddress": user_ip,
		"language": locale.split(',')[0],
		"software": ua.source.split('(')[1].split(')')[0]
	};
	res.end(JSON.stringify(result));
}).listen(process.env.PORT || 8000);