var mysql = require('mysql');

var pool = mysql.createPool({
	host : "192.168.1.24",
	user : "root",
	password : "a",
	database : "bo_dsp"
});


pool.getConnection(function(err,connection){
	connection.query("select * from devices",function(err,rows){
	if(err)
		console.log("Error "+err);
	else
		console.log(rows);

	connection.release(); 
})});
