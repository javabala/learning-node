var net = require('net'),
    time = require('strftime'),
    timeFormat = '%Y-%m-%d %H:%M';

net.createServer(function(socket){
    date = time(timeFormat,new Date())
    socket.end(date+"\n")
}).listen(+process.argv[2])