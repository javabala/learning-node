var async = require('async'),
    http = require('http'),
    bl = require('bl');

async.map([process.argv[2], process.argv[3], process.argv[4]], function (url,callback) {
    http.get(url, function (res) {
        res.pipe(bl(function (err, data) {
            callback(null,data.toString());
        }))
    });

}, function (err, results) {
    results.forEach(function (content) {
        console.log(content)
    })
})