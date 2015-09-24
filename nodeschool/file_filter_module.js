var fs = require('fs'),
    path = require('path');

module.exports = function(dir,ext,callback) {
    var filteredFiles = [];
    fs.readdir(dir, function (err, files) {
        if(err)  { return callback(err);}
        files.filter(function (file) {
            if (path.extname(file).split(".")[1] === ext)
                filteredFiles.push(file);
        });
        callback(null,filteredFiles);
    });
}
