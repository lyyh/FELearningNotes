// test data
var origin = [1,2,3]

// some 
var selfSome = function (fn,context) {
    var self = this
    var arr = Array.prototype.slice.call(self)
    for(var i = 0;i < arr.length;i++){
        if(!arr.hasOwnProperty(arr[i]))continue
        var res = fn.call(context,arr[i],i,arr)
        if(res)return true
    }
    return false
}

Array.prototype.selfSome = selfSome
var result = origin.selfSome(function (item,index) {
    return item % 2 === 0
})
console.log(result)