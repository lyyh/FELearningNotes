# js数组API

## concat
concat() 方法用于连接两个或多个数组。该方法不会改变现有数组，仅仅会返回被连接数组的一个副本。  
返回：一个新的数组副本
```
arrayObject.concat(arrayX,arrayX,......,arrayX)
```

## coypWithin  
数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组    
返回：返回当前修改的数组  
```
Array.prototype.copyWithin(target, start = 0, end = this.length) 
```
-   target （必需）：从该位置开始替换数据。
-   start （可选）：从该位置开始读取数据，默认为 0 。如果为负值，表示倒数。
-   end （可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

## entries
entries()方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对。由键值对组成的数组。  

返回：返回一个新的数组迭代器对象  
```
var a = ['a', 'b', 'c'];
var iterator = a.entries();

console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']

var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## from 
from()方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对。  
-   arrayLike（必需）：一个类似数组的或可迭代的对象，可以转换为数组。
-   mapFn （可选）：映射函数来调用数组的每个元素。
-   thisArg （可选）：在执行mapFn时使用的值。

## every
entries()方法返回一个回调函数的条件bool值。  
```
arr.every(callback[, thisArg])  
```
callback（必需）：回调函数。
thisArg （可选）：当前值。  
返回：回调函数每个数组元素的bool值  
```
function isBigEnough(element, index, array) { 
  return element >= 10; 
} 

[12, 5, 8, 130, 44].every(isBigEnough);   // false 
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

## fill
fill()方法将数组的所有元素从起始索引填充到结束索引。  
```
arr.fill(value)
arr.fill(value, start)
arr.fill(value, start, end)
```
value：一个类似数组的或可迭代的对象，可以转换为数组。  
start ：开始位置 默认为0  
end ：结束位置 默认为当前length  

## filter  
filter()方法创建一个新的数组，其中包含符合回调条件的所有元素。    

```
var newArray = arr.filter(callback[, thisArg])
```
callback：回调函数。
thisArg：当前元素

## find

find()方法返回满足回调条件的数组中第一个元素的值。否则将返回未定义。 
 
```
arr.find(callback[, thisArg])
```
callback：回调函数。
thisArg：当前元素  
返回  如果元素符合条件  返回数组中的值;否则,未定义。  

```
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130
```


## findIndex
findIndex()方法返回满足回调条件的数组中第一个元素的索引。否则将返回-1。  
```
arr.findIndex(callback[, thisArg])
```
callback：回调函数。  
thisArg：当前元素  
返回：如果元素符合条件 返回数组中的值的索引;否则,-1。  

## forEach

callback：回调函数。
currentValue：在数组中处理当前元素
index：在数组中处理当前元素的索引。
array：当前数组

## includes 
includes()方法确定一个数组是否包含某个元素，返回true或false。  
```
arr.includes(searchElement)
arr.includes(searchElement, fromIndex)
```
serachElement：查询元素。
fromIndex：开始查询元素位置

## indexOf
indexOf()返回一个给定元素可以在数组中找到的第一个索引，如果不是，则返回- 1。
```
arr.indexOf(searchElement[, fromIndex])
```
serachElement：查询元素。  
fromIndex：开始查询元素位置  

## join
join()将数组中的所有元素(或类似数组的对象)连接到一个字符串中。  
```
arr.join()
arr.join(separator)
```
separator：分隔符  

## keys
keys()方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键。  
```
arr.keys()
```
```
var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

## lastIndexOf
lastIndexOf()方法返回在数组中可以找到给定元素的最后一个索引，如果不存在，则返回- 1。该数组向后搜索，从fromIndex开始。  
```
arr.lastIndexOf(searchElement)
arr.lastIndexOf(searchElement, fromIndex)
```
serachElement：查询元素。  
fromIndex：开始查询元素位置  

## map
map()方法创建一个新的数组，该数组的结果是调用调用数组中的每个元素的函数。  
```
var new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
```
callback：回调函数。
currentValue：在数组中处理当前元素
index：在数组中处理当前元素的索引。
array：当前数组

## reduce 
reduce()方法对累加器和数组中的每个元素(从左到右)使用一个函数，以将其还原为一个值。  
```
arr.reduce(callback[, initialValue])
```
callback：回调函数。  
initiaValue：当前元素  

## some
some()方法检测数组中至少一个元素是否通过所提供回调函数的条件。  
```
arr.some(callback[, thisArg])
```
callback：回调函数。  
thisArg：当前元素  

## splice
splice()方法通过删除现有元素和/或添加新元素来更改数组的内容。  
```
array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)
```
start：开始位置。  
deleteCount：如果deleteCount为0，则没有删除元素。在这种情况下，您应该指定至少一个新元素。  
item1， item2：添加到数组中的元素，从开始索引开始。如果没有指定任何元素，splice()将只删除数组中的元素。  

## of
Array.of()方法创建一个新的数组实例，该数组实例的参数数目不定，不管参数的类型或类型。  
```
Array.of(element0[, element1[, ...[, elementN]]])
```
element 创建数组的元素  

返回值：返回新函数实例  
``` 
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]


// 实现原理（兼容）
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```









