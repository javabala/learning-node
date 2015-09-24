// Asynchronous version 1

var fs = require("fs")
var rl = require('readline').createInterface({
    input : fs.createReadStream(process.argv[1]),
    terminal : false
})

var lineCount = 0;
rl.on('line',function(line){
    lineCount += 1;
});

rl.on('close',function(){
    console.log(lineCount);
});

// Asynchronous version 2

fs.readFile(process.argv[1],function(err,data){
    console.log(data.toString().split("\n").length - 1);
})

// Synchronized version

var buf = fs.readFileSync(process.argv[1]);
var lines = buf.toString().split("\n");
console.log(lines.length);