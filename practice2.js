var http = require("http");
var osLocale = require("os-locale");
var useragent = require("express-useragent");

http.createServer(function(req, res) {
	var forwardedIp = req.headers['x-real-ip'] || req.headers['x-forwarded-for'];
	var user_ip = forwardedIp?forwardedIp:req.connection.remoteAddress;
	var ua = useragent.parse(req.headers['user-agent']);
	osLocale().then(locale => {
		var result = {
			"ipaddress": user_ip,
			"language": ua.language,
			// "language": locale,
			"software": ua.source.split('(')[1].split(')')[0]
		};
		res.end(JSON.stringify(result));
	});
	
}).listen(process.env.PORT || 8000);