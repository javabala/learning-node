var http = require('http'),
    map = require('through2-map');

http.createServer( function (req,res) {
    req.pipe(map( function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
}).listen(+process.argv[2]);