/**浅拷贝 */
function shallowClone(target) {
    var cloneObj = {}
    for(var key in target){
        cloneObj[key] = target[key]
    }
    return cloneObj
}

var obj = {a:1,b:2}
var cloneObj = shallowClone(obj)
console.log('浅拷贝')
console.log(cloneObj)
// console.log(shallowClone(obj))

/**简单的深拷贝 */
/**
 *思路：
 * 1. 如果是原始类型，无需继续拷贝，直接返回
 * 2. 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
 * @param {*} target
 */
function deepClone(target) {
    var cloneTarget = {}
    for(var key in target){
        if(typeof target[key] === 'object'){
            cloneTarget[key] = deepClone(target[key])
        }else{
            cloneTarget[key] = target[key]
        }
    }
    return cloneTarget
}

var obj = {a:1,b:{c:1}}
var res = deepClone(obj)
console.log('只区别引用类型和普通类型的深拷贝')
console.log('test',obj.b === res.b)