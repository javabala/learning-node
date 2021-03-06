/**
 * Created by bala on 9/15/15.
 */

var express = require('express');

var abstract = require('./abstract_mysql_connect')
var app = express();

app.get("/devices", function (req, res) {
    abstract.devices(req, res);
});

app.get("/flush_caches", function (req, res) {
    abstract.flush_caches(req, res);
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Server started and listening on http://%s:%s", host, port);

});

