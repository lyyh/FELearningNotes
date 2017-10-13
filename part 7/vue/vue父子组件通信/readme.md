# vue父子组件通信
父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息
## 父组件传数据给子组件
通过props属性来实现  

## 子组件与父组件通信
vue 2.0只支持单向数据传递，可以通过触发事件来通知父组件改变数据，从而达到改变子组件的目的。  
```
<template>
    <div @click="up"></div>
</template>

methods: {
    up() {
        this.$emit('upup','hehe'); //主动触发upup方法，'hehe'为向父组件传递的数据
    }
}
```
```
<div>
    <child @upup="change" :msg="msg"></child> //监听子组件触发的upup事件,然后调用change方法
</div>
methods: {
    change(msg) {
        this.msg = msg;
    }
}
```
在父组件层面监听子组件触发的事件，调用事件方法。在子组件层面调用this.emit()，触发事件

## 非父子组件通信
兄弟组件之间的通信  
我们可以实例化一个vue实例，相当于一个第三方
```
let vm = new Vue(); //创建一个新实例
```
组件他哥
```
<div @click="ge"></div>
methods: {
    ge() {
        vm.$emit('blur','sichaoyun'); //触发事件
    }
}
```
组件小弟接受大哥命令
```
<div></div>
created() {
  vm.$on('blur', (arg) => { 
        this.test= arg; // 接收
    });
}
```
