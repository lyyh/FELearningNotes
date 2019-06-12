// test data
var origin = [1,2,3]

// 用普通数组 push 实现 filter 方法
var selfFilter = function (fn,context) {
    var self = this
    var arr = Array.prototype.slice.call(self)
    var newArr = []
    for(var i = 0;i < arr.length ;i++){
        if(!arr.hasOwnProperty(i))continue
        fn.call(context,arr[i],i,arr) && newArr.push(arr[i])
    }
    return newArr
}

Array.prototype.selfFilter = selfFilter
console.log('seflFilter',origin.selfFilter(function (item,index) {
    if(item  % 2 === 0)return false
    return true
}))

// 使用 reduce 实现 filter 方法
var selfFilter2 = function (fn,context) {
    var self = this
    return self.reduce(function (pre,cur,index) {
        return fn.call(context,cur,index,self)?[...pre,cur]:[...pre]
    },[])
}

Array.prototype.selfFilter = selfFilter
console.log('seflFilter2',origin.selfFilter(function (item,index) {
    if(item  % 2 === 0)return false
    return true
}))