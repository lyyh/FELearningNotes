// 初始默认值
var withZeroValue = (target, zeroValue) => new Proxy(target, {
    get: (obj, prop) => (prop in obj && obj[prop] !== undefined) ? obj[prop] : zeroValue
})
var tar = {a:undefined}
var proxy = withZeroValue(tar,100)
console.log(proxy)
console.log(proxy.a)

// 负数组索引
var nagativeArray = arr => new Proxy(arr,{
    get(obj,propKey,receiver){
        // reflect 使用函数的方式取值
        return Reflect.get(obj,(+propKey < 0)?obj.length + +propKey:propKey,receiver)
    }
})
var arr = nagativeArray([1,2,3])
console.log(arr[-1])

// 私有方法
var privatePropWrapper = (obj,prefix='_') => new Proxy(obj,{
    has(obj,prop){
        return !prop.startsWith(prefix) && prop in obj
    },
    ownKeys(obj,prop,receiver){ // 属性key的遍历
        return Reflect.ownKeys(obj).filter(prop => typeof prop === 'string' || !prop.startsWith(prefix))
    },
    get(obj,prop){ // 需要 prop in obj 方法，不然会报错
        return prop in obj && !prop.startsWith(prefix)?obj[prop]:undefined
    }
})
var inst = privatePropWrapper({
    '_a':'123',
    'b':'321'
})
console.log(inst._a)
console.log(inst.b)
console.log(inst)