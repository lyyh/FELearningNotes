var pro1 = Promise.resolve('pro1');
console.log(pro1);
// console.log('123');
var pro2 = new Promise(function(resolve,reject){
    console.log('pro2');
});
