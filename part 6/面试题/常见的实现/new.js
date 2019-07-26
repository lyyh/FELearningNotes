// new 方法实现原理
// 1. 创建一个空对象，构造函数中的 this 指向这个空对象
// 2. 这个新对象被执行 [[原型]] 连接，继承原型
// 3. 执行构造函数方法，属性和方法被添加到this引用的对象中
// 4. 如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。
function newObj() {
    let target = {}
    let [constructor,...args] = [...arguments]
    target.__proto__ = constructor.prototype
    let result = constructor.apply(target,args)
    if(result && (typeof result === 'object' || typeof result === 'function')){
        return result
    }else{
        return target
    }
}

// 测试
function Student(name) {
    this.name = name
}
let instance = newObj(Student,'123')
console.log(instance)
