/**
* module that holds all customizable business logic 
* each function defined here can be use in the mode json being written
*
**/
function toDate(date){
    var d = new Date(date);
    return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+((d.getDate()<10)?"0"+d.getDate():d.getDate());
}
module.exports = function(){
 return {
   capitalize: function(row,results,val,key,cacheMap,callback){
     //incase of error callback(err);
    return callback((val != null)? val.toUpperCase() : val);
   },
     date: function(row,results,val,key,cacheMap,callback){
         //incase of error callback(err);
         console.log(typeof val.toString());
         return callback((val != null)? toDate(val.toString()) : val);
     }
  }
}();
