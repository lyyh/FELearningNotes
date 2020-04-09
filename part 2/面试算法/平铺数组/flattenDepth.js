// 指定深度平铺数组
// concat 相比于 push，concat 可以传入 数组自动平铺第一层，搭配 reduce 使用
var testData = [1,[2],[3,[4]]]
var test1 = [[['a']],[['b']]]
var flattenDepth = (arr,depth = 1) => {
    return depth === 1?
    arr.reduce((acc,cur) => acc.concat(cur),[]):
    arr.reduce((acc,cur) => acc.concat(Array.isArray(cur)?flattenDepth(cur,depth-1):cur),[])
}

console.log(flattenDepth(test1,2))