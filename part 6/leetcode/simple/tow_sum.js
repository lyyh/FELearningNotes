/*
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
*/
var arr = [2, 7, 11, 15]
var target = 26

// 两遍哈希表
function towSum(args, sum) {
    var map = new Map()
    for (var i = 0; i < args.length; i++) {
        map.set(args[i], i)
    }
    for (var j = 0; j < args.length; j++) {
        var substract = sum - args[j]
        if (map.has(substract) && map.get(substract) !== j) {
            return [j, map.get(substract)]
        }
    }
    return false
}

// // 一遍哈希表
// function towSum1(args,sum){
//     var map = new Map();
//     for(var i = 0;i < args.length;i++){
//         var substract = sum - args[i]
//         if(map.has(substract)){
//             return [i,map.get(substract)]
//         }
//         map.set(args[i],i)
//     }
//     return false;
// }

// // 对撞指针
// // 前置条件：有序数组
// function towSum2(nums,target){
//     var left = 0;
//     var right = nums.length - 1
//     while (left < right) {
//         if(nums[left] + nums[right] === target){
//             return [left,right]
//         }else if(nums[left] + nums[right] < target){
//             left++
//         }else{
//             right--
//         }
//     }
//     return false
// }

// console.log(towSum2(arr,target))

var g = [5, 10, 2, 9, 15, 9]
var s = [6, 1, 20, 3, 8]
var gO = g.sort(function(a, b) {
    return a - b
})
var sO = s.sort(function(a, b) {
    return a - b
})
console.log(gO)
console.log(sO)
