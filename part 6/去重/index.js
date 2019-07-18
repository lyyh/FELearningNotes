// filter 去重
var origin = [1,2,3,3,4,4]
var result = origin.filter((item,idx,arr) => {
    return arr.indexOf(item) === idx
})

console.log(result)