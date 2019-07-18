## JSON.stringify
将一个 JavaScript 对象转换成文本化的 JSON
### Symbol、undefined 不能被文本化转换
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