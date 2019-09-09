## 深入理解React
- 高阶组件是返回一个新的组件
- v16 之后的render之前的函数都可能被打断，所以保持书写规范，尽量不在render之前的函数里面写副作用的代码
    - componentWillMount
    - componentWillReceiveProps
    - componentShouldUpdate
    - componentWillUpdate
- 