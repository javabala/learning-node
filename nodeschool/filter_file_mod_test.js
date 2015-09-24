var fileFilter = require("./file_filter_module");

fileFilter(process.argv[2],process.argv[3],function(err,result){
    if(err) console.log(err.path+" does not exist or not readble")
    else{
        result.forEach(function(file){
            console.log(file);
        });
    }
})
