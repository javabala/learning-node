var fs = require('fs');
var stream = fs.createReadStream('/home/bala/test.txt');
stream.on('data', function (err, chunk) {
    if (err != null)
        console.log(err);
    else
        console.log(chunk);
});
stream.on('end', function () {
    console.log('Finsihed');
});
