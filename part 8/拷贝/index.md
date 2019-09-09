## 方式一
最简单的方式
```
var obj = {a:1}
JSON.stringify(JSON.parse(obj))
```

问题：
- 无法对循环引用进行拷贝`Uncaught TypeError: Converting circular structure to JSON`
- 无法拷贝函数
- 无法拷贝其他类型，例如 map、set 类型

## 方式二