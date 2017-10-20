# node 事件驱动
能体现事件驱动本质最简单的形式就是函数的回调，事件触发伴随着函数回调，用函数回调来解释事件触发  

## node的回调
回调函数其实就是作为函数参数的函数，这个概念的实现得益于JavaScript语言中的函数是第一类对象。  

## promise: 回调的取代者
-   如今，JavaScript有了Promise对象，异步可以不再需要回调了。回调方式将回调函数作为参数传递给主函数，同时在主函数内部处理错误信息。Promise对象则不同，它可以单独处理成功／失败情况，也可以链接多个异步调用，而不是嵌套处理。  
-   由于原生JavaScript自带 Promise对象，主函数很容易改造成支持Promise接口，同时支持回调方式  

## promise:结合async/await
-   当异步遇到循环的时候，Promise接口会让代码简单很多。用回调的话，代码容易混乱。处理异步的最新特性是async函数，它能让我们像处理同步函数一样处理异步函数，使得代码更具可读性。    

-   执行这个异步函数countOdd，就能得到我们想要的结果。代码看起来简单且更具可读性。需要注意的是，我们需要用try/catch处理这个异步调用，以免出错。  

-   await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。  

-   async返回值是Promise对象，可以用then命令指定下一步操作  
-   可以使用try/catch来对异步中的异常进行捕获  

## EventEmitter
-   EventEmitter是促进Node中对象之间交流的模块，它是Node异步事件驱动机制的核心,Node中很多自带的模块都继承自事件触发模块。  
-   概念：触发器触发事件，该事件对应的监听函数被调用。触发器有两个特征，触发(emit)某个事件，注册(on)／注销监听函数
-   不要想当然地认为事件一定是同步或者异步的。  
-   相对于一般的回调，事件触发的优点在
-   emit/on 第一个参数为数据
## 异步事件
-   使用async/await 代替 回调函数，可读性更好，更接近于javascript语言本身，唯一不足的就是需要将异步监听函数改造成promise对象

-   使用async/await 当出现异常或者错误的时候，会自动被try/catch捕获  

## 监听函数的顺序
如果给一个事件注册了多个监听函数，它们的调用是有序进行的。调用的顺序跟注册的顺序保持一致。  
如果想让定义在后面的监听函数先调用，可以通过prependListener方法：  
```
// 第一个监听函数
withTime.on('data', (data) => {
  console.log(`Length: ${data.length}`);
});

// 第二个监听函数
withTime.prependListener('data', (data) => {
  console.log(`Characters: ${data.toString().length}`);
});

withTime.execute(fs.readFile, __filename);
```
最后，如果想要移除某个监听函数，用removeListener方法。  



## 参考资料
[node回调](https://zhuanlan.zhihu.com/p/27317102)
