var fs = require('fs'),
    http = require('http');

http.createServer(function (req,res){
    var fileContent = fs.createReadStream(process.argv[3])
    fileContent.pipe(res);
}).listen(+process.argv[2])