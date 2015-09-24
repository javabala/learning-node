var bl = require('bl'),
    http = require('http'),
    resContent;

http.get(process.argv[2],function(res){
    //collects buffers from stream and store it in data
    res.pipe(bl( function (err,data){
        resContent = data;
    }));
    res.on('error',console.error)
    res.on('end',function(){
        console.log(resContent.length)
        console.log(resContent.toString())
    })
})