// // 非就地排序（不改变原数组）
// // 快速排序递归去实现，快速排序应该算是在冒泡排序基础上的递归分治法
// // let quick = arr => {
// //     let len = arr.length;
// //     // 检查数组元素长度，如果小于1，则返回
// //     if(len < 1){
// //         return arr;
// //     }
// //     // 去中间值为基准
// //     let pivotIndex = Math.floor(len/ 2);
// //     let pivot = arr[pivotIndex];
// //     let left = [];
// //     let right = [];
// //     for(let i = 0;i < len;i++){
// //         if(i == pivotIndex){
// //             continue;
// //         }
// //         if(arr[i] > pivot){
// //             right.push(arr[i])
// //         }else{
// //             left.push(arr[i]);
// //         }
// //     }
// //     return quick(left).concat([pivot],quick(right));
// // }
// // console.log(quick([2,1,3,5,2,1,6]));

// //就地排序（改变原数组）
// // let quick = (arr, start, end) => {
// //     if(end - start > 1){
// //         let mid = divider(arr,start,end);
// //         quick(arr,start,mid);
// //         quick(arr,mid+1,end);
// //     }
// //     return arr;
// // }
// // let divider = (arr, start, end) => {
// //     let len = arr.length;
// //     if (len < 1) {
// //         return arr;
// //     }
// //     //基准值
// //     let pivot = arr[start];
// //     while (start < end) {
// //         while (start < end && arr[end] >= pivot) {
// //             end--;
// //         }
// //         if (start < end) {
// //             [arr[start], arr[end]] = [arr[end], arr[start]];
// //             start++;
// //         }
// //         while (start < end && arr[start] < pivot) {
// //             start++;
// //         }
// //         if (start < end) {
// //             [arr[start], arr[end]] = [arr[end], arr[start]];
// //             end--;
// //         }
// //     }
// //     arr[start] = pivot;
// //     return start;
// // }

// // console.log(quick([2,1,3,4,2,5],0,5));

// Function.prototype.bind = function(){
//     var self = this;
//     var bindObj = arguments[0];
//     var parmas = Array.prototype.slice.call(arguments,1);
//     return function(){
//         self.apply(bindObj,parmas);
//     }
// }

// function foo(){
//     return this.bar;
// }
// foo = foo.bind({
//     bar: 'bar1'
// });
// foo = foo.bind({
//     bar: 'bar2'
// })
// console.log(foo());
// console.log(213);
var str = 'a beautiful adsf 123ful asdf beautiful grateful grateful grateful grateful';
var array = str.split(' ');
var indexStr = 'ful'
var map = [];
map = array.filter(function(el){
    return el.lastIndexOf(indexStr) == el.length-indexStr.length
});
var objMap = {};
map.forEach(function(el){
    if(objMap[el] == undefined){
        objMap[el] = 1;
    }else{
        objMap[el]++;
    }
})
var filterMap = map.filter(function(el,index,self){
    return self.indexOf(el) == index;
})

filterMap.sort(function(pre,last){
    return objMap[last] - objMap[pre];
})
var rets = [];
filterMap.forEach(function(el){
    rets.push(el + '=' + objMap[el]);
})
var result = rets.join(',');
console.log(result);
