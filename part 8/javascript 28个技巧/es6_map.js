// 实现 es6 map
/**
 * var origin = [1,2,3]
 * var current = origin.map(function (item,index) {
 *      return item * 2
 * })
 */

 // map 的第二个参数为第一个参数回调中的 this 指向，如果第一个参数为箭头函数，那设置第二个 this 会因为箭头函数的词法绑定而失效
 var selfMap = function (fn,context) {
     const originArr = this
     const newArray = Array.prototype.slice.call(originArr)
     const mappedArray = []
     for(var i = 0;i < newArray.length;i++){
        if(!newArray.hasOwnProperty(i))continue
        mappedArray.push(fn.call(context,newArray[i],i,originArr))
     }
     return mappedArray
 }
// 使用 reduce 方法实现 map
var selfMap2 = function(fn,context){
   var self = this
   var arr = Array.prototype.slice.call(self)
   return arr.reduce(function (pre,cur,index) {
      return [...pre,fn.call(context,cur,index,arr)]
   },[])
}


 Array.prototype.selfMap = selfMap
 Array.prototype.selfMap2 = selfMap2
 var origin = [1,2,3]
 
 var current = origin.selfMap(function (item,index) {
    return item * 2   
 })
 var current2 = origin.selfMap2(function(item,index){
    return item * 3
 })
 console.log(current)
 console.log(current2)