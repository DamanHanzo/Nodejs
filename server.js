var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };

        //var html = fs.readFileSync(__dirname + '/index.html');
        res.end(JSON.stringify(obj));
    } else {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

}).listen(1337, '127.0.0.1');