# 响应式原理
-   将数据模型与视图绑定，当修改数据的时，视图会自动更新  
-   Vue通过设定对象属性的 setter/getter 方法来监听数据的变化，通过getter进行依赖收集，而每个setter方法就是一个观察者，在数据变更的时候通知订阅者更新视图。   


## watcher
-   触发getter的时候收集依赖，实质上是将watcher实例推送到列表中  
-   触发setter的时候会通知Notify消息到watcher  
-   setter 触发消息到 Watcher watcher帮忙告诉 Directive 更新DOM，DOM中修改了数据也会通知给 Watcher，watcher 帮忙修改数据  
-   通过watcher 触发的 getter 会收集依赖
-   DOM中的数据必须通过watcher来绑定，就是说DOM中的数据必须通过watcher来读取！

## Observer 
-   Observer观察者模式的实现，它用来观察数据的变化，触发消息。  
-   Observer会观察两种类型的数据，Object 与 Array，对于Array类型的数据，会先重写操作数组的原型方法，重写后能达到两个目的，当数组发生变化时，触发 notify。如果是 push，unshift，splice 这些添加新元素的操作，则会使用observer观察新添加的数据  
-   而对于Object类型的数据，则遍历它的每个key，使用 defineProperty 设置 getter 和 setter，当触发getter的时候，observer则开始收集依赖，而触发setter的时候，observe则触发notify。  

## Dep
-   当通过 watcher 触发 getter时，watcher会使用 dep.addSub(this) 把自己的实例推到 subs 中
-   当触发setter的时候，会触发notify，而notify则会把watcher的update方法执行一遍。

## 追踪变化
每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。  

## 总结
- observer可以监听数据的变化  
- Dep 可以知道数据变化后通知给谁  
- Watcher 可以做到接收到通知后将执行指令的update操作  
- Directive 可以把 Watcher 和 指令 连在一起  
- 不同的指令都会有update方法来使用自己的方式更新dom  
- 必须使用watcher触发getter，Dep才会收集依赖
### 执行流
- 当数据触发 setter 时，会发消息给所有watcher，watcher会跟执行指令的update方法来更新视图  
- 当指令在页面上修改了数据会触发watcher的set方法来修改数据

## 参考
[vue深入原理](https://github.com/berwin/Blog/issues/11)