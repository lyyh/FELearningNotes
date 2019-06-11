// function sum() {
//     var Obj = function () {
//         this.result = 0
//         this.sumOf = function () {
//             return this.result
//         }
//     }
//     var arr = Array.prototype.slice.call(arguments)
//     var result
//     result = arr.reduce(function(acc,cur){
//         return acc+cur
//     })
//
//     // return function () {
//     //
//     // }
//     return {
//         sumOf:function () {
//
//         }
//     }
// }


// function sum(arg) {
//
//     function Obj() {
//         this.result =
//     }
//
// }

function sum() {
    var arr = Array.prototype.slice.call(arguments)
    var result = arr.reduce(function(acc,cur){
        return acc+cur
    })
    return {
        sumOf: function () {
            return result
        }
    }
}
console.log(sum(1,2,3).sumOf())
