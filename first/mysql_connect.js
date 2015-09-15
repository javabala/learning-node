var mysql = require('mysql');

var pool = mysql.createPool({
    host: "192.168.1.24",
    user: "root",
    password: "a",
    database: "bo_dsp"
});

function fetch_devices(req,res) {

    pool.getConnection(function(err,connection){
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from devices",function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        });
    });
}

module.exports.devices = fetch_devices;