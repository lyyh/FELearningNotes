/** 
 * 增加一个key标识
 * 场景：卖房与购房
 * 发布者维护一个缓存列表，用于存放订阅者回调函数
 * 发布消息的时候，会遍历这个缓存列表，触发订阅者回调函数
*/
var salesOffices = {} // 发布者
salesOffices.clientList = {} // 缓存列表
salesOffices.listen = function (key,fn) {
    if(!this.clientList[key]){
        this.clientList[key] = []
    }
    
    this.clientList[key].push(fn)
}
salesOffices.trigger = function () {
    var key = Array.prototype.shift.call(arguments),
        fns = this.clientList[key];
    
    if(!fns)return false;
    
    for(var i = 0,fn;fn=fns[i++];){
        return fn.apply(this,arguments)
    }
}

salesOffices.listen('aaa',function (price) {
    console.log('price',price)
})

salesOffices.trigger('aaa',1)