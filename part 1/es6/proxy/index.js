var withZeroValue = (target, zeroValue) => new Proxy(target, {
    get: (obj, prop) => (prop in obj) ? obj[prop] : zeroValue
})
var tar = {}
var proxy = withZeroValue(tar,100)
console.log(proxy.a)