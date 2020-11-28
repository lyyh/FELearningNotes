var promise = new Promise(function(resolve){
    resolve(1)
})

promise.then(function(){
    throw('1111')
})