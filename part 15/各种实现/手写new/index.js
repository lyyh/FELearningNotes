function myNew(Func,...args){
    var instance = {}
    if(Func.prototype){
        Object.setPrototypeOf(instance,Func.prototype)
    }
    var res = Func.apply(instance,args)
    if((typeof res === 'function') || (typeof res === 'object' && typeof res !== 'null')){
        return res
    }
    return instance
}

var Parent = function (name) {
    this.name = name
}
Parent.prototype.getName = function () {
    return this.name;
}
var child = myNew(Parent,'阿哥')
console.log(child)
Object.getOwnPropertyNames(child).forEach((key,index)=>{
    console.log(key,child[key])
})
// console.log(Object.getOwnPropertyNames(child))