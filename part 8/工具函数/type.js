// 判断类型
// 不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上,因为 call 会将第一个参数进行装箱操作
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

// useage
const isArray = isType('Array')
console.log(isArray([]))