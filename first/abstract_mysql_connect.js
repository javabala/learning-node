/**
 * Created by bala on 9/15/15.
 */
var mysql_connect = require('./mysql_connect');

var NodeCache = require( "node-cache" );
var dbCache = new NodeCache( { stdTTL: 10, checkperiod: 120 } );
var deviceQuery = "select * from devices";

function devices(req,res){
    dbCache.get( deviceQuery, function( err, value ){
        if( !err ){
            if(value == undefined){
                // key not found
                console.log("record not found in cahce. connecting db to retrieve")
                mysql_connect.devices(req,res,dbCache,deviceQuery);
            }else{
                console.log( "fetching records from cache" );
                // got records from cache
                res.json(value);
            }
        }
    });
}

module.exports.devices = devices;