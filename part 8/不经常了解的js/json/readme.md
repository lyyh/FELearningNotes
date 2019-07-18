## JSON.stringify
将一个 JavaScript 对象转换成文本化的 JSON
### Symbol、undefined、function 不能被文本化转换
这两个属性不能被文本化
```
let foo = { b: undefined };
JSON.stringify(foo);
// {}
// Symbols
foo.b = Symbol();
JSON.stringify(foo);
// {}
```

### 循环引用
```
var d = {c:d}
JSON.stringify(d) // "{}"
```

### 不可用 stringify 的元素用 null 填充
```
let foo = [Symbol(), undefined, function() {}, "works"];
JSON.stringify(foo);
// "[null,null,null,'works']"
```

### 重写对象的toJSON函数
```
function Person(){
    this.name = 'liu';
    this.age = 123
}
Person.prototype.toJSON = function(){
    return {name:'liu'}
}
var pers = new Person()
console.log(JSON.stringify(pers)) // {"name":"liu"}
```

### 可选参数
```
JSON.stringify(value, replacer?, space?)
```
**replacer**  
replacer是一个过滤函数或则一个数组包含要被 stringify 的属性名。如果没有定义，默认所有属性都被 stringify。  
**space**  
参数 space 用来格式化输出结果

### 总结
- 无法 stringify 的几种类型
- 使用 toJSON 来自定义 JSON.stringify 的属性
- 可选参数 replacer 的两种定义方法来过滤属性
- 可选参数 space 用来格式化输出结果
- 数组和对象中如果包含无法 stringify 的元素的时候的区别

### 参考资料
[你所不知道的JSON.stringify](https://blog.fundebug.com/2017/08/17/what-you-didnt-know%20about-json-stringify/)