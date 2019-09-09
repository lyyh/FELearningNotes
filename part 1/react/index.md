## react 本质
1. 一套公式：`UI = f(data)`，改变UI通过改变data来驱动 function，function 来影响 UI 的结果
2. react 里面一切都是组件
3. react 是一种声明式编程的方式

## 知识点
1. React元素是用来描述UI对象的
2. JSX的实质就是React.createElement的语法糖，其作用是生成react元素
3. 

## react 的特质
1. 怎么实现组件化
2. 怎么实现数据绑定
3. 怎么实现父子、兄弟组件之间的通信
4. 组件的props，state

## react占位


## 三元运算符需不需要用key
```
someCondition?<div/>:null
```
编译之后变成
```
someCondition?React.createElement('p',null,'what'):null
```