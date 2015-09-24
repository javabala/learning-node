var http = require('http'),
    url = require('url');

http.createServer( function (req,res){
    var urlObj = url.parse(req.url,true)
    res.writeHead( 200, {'Content-Type' : 'application/json'})
    if(urlObj.pathname === '/api/parsetime') {
        var date = new Date(urlObj.query.iso);
        var resContent = "{\"hour\":"+zeroFill(date.getHours())+date.getHours()+",\"minute\":"+zeroFill(date.getMinutes())+date.getMinutes()+",\"seconds\":"+zeroFill(date.getSeconds())+date.getSeconds()+"}";
        res.end(resContent);
    } else {
        var date = new Date(urlObj.query.iso);
        var unix = Math.round(+date);
        var resContent = "{\"unixtime\":"+unix+"}";
        res.end(resContent);
    }
}).listen(+process.argv[2])

function zeroFill(value){
    return (value < 10) ? "0" : "";
}

/*** Alternate approach

var http = require('http')
var url = require('url')

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))

 ***/