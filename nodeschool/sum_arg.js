var sum = 0;
process.argv.forEach(function(ele,index,a){
   if(index !== 0 && index !== 1)
    sum += +ele;
});
console.log(sum);