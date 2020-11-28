// 实现 add(1)(2,3)(4).value() 10
function add(...cache) {
    var curry = function (...args) {
        cache = cache.concat(args)
        return curry
    }
    var value = function () {
        return cache.reduce((acc, val) => {
            return acc + val
        }, 0)
    }
    curry.value = value
    return curry
}

console.log(add(1,3,4)(2, 3)(4).value())