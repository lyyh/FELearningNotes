## 原理

## 特点
useState 提供的 setState 方法并不是合并state对象，而是替换整个 state对象

## 实现思路
初始值只在初次渲染时有效
```
function useState(initState) {
    lastState = lastState || initState;
    ...
}
```

每次render之后 startIndex 归0
