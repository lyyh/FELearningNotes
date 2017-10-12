Array.prototype.arrayConcatFn = function(){
    var argArr = Array.prototype.slice.call(arguments);
    var len = argArr.length;
    var retArr = [];
    var context = this;
    context.forEach(function(el,index){
        retArr.push(el);
    })
    for(var i = 0;i<len;i++){
        if(argArr[i] instanceof Array){
           argArr[i].forEach(function(el){
               retArr.push(el);
           }) 
        }else{
            retArr.push(argArr[i]);
        }
    }
    return retArr;
}
var ret = [1,2,3].arrayConcatFn(undefined,undefined);
console.log(ret);
