var isObject = obj => typeof obj === 'object'
// deep merge
function merge(target,origin) {
    for(var attr in origin){
        if(isObject(target[attr]) && isObject(origin[attr])){
            merge(target[attr],origin[attr])
        }else{
            target[attr] = origin[attr]
        }
    }
    return target
}

var a = {a:{c:1}}
var b = {b:2,a:{c:2}}
console.log(merge(a,b))