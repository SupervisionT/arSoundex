var http = require('http');
var basic = require('../../lib/index');

var auth = basic(function (user, pass, callback) {
    if (user === 'let' && pass === 'me in') return callback(null);
    callback(401);
});

http.createServer(function (req, res) {
    auth(req, res, function (err) {
        var head = {};
        if (err) head = {'WWW-Authenticate': 'Basic realm="Secure Area"'};
        
        res.writeHead(err || 200, head);
        res.end();
    });
}).listen(8000);
