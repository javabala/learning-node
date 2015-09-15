var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.createReadStream('/home/bala/test.txt').pipe(res);
}).listen(3000);
console.log("Server started on 3000");
