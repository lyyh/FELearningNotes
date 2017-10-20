# 定时器
## 定时器setTimeout与setImmediate
-   两者创建的定时器会被插入到定时器观察者内部的一个红黑树中。每次Tick都会从该红黑树中提取出定时器对象，检查是否超时，若超时则形成一个事件，根据情况将函数插入到执行队列中去  
-   定时器问题在于并非精确的，长时间的任务会影响定时器事件回调函数的执行  
-   定时器需要动用红黑树，创建与迭代会消耗性能，红黑树的操作时间复杂度为O(ln(n))，用process.nextTick代替  

## setImmediate 与 setTimeout的区别
-   setImmediate() 比 setTimeout() 优势的地方是 setImmediate() 在 I/O 循环中总是先于任何定时器，不管已经定义了多少定时器。  
-   setTimeout 0实质在内部是延时1

## process.nextTick
-   每次调用process.nextTick方法，只会将回调函数放入队列中，下一轮Tick时取出执行  

## setImmediate与process.nextTick
-   优先级：process.nextTick > setImmediate。事件循环对观察者的检查是有先后顺序的，process.nextTick为idle观察者，setTimmediate为check观察者，idle观察者 > IO观察者 > check观察者。  
-   process.next 回调函数保存在数组中，setImmediate 回调函数保存在链表中，每次Tick，数组中的回调函数全部执行完，链表中的回调函数一次只能执行一次。保证每轮循环都能较快速的执行完，防止CPU占用过多而阻塞后续的IO调用  
-   



## setTimeout 0 vs setImmediate
setTimeout 0是为了实现异步操作，用setImmediate代替就行了  
根据源码显示执行

## process.nextTick() vs setTimeout()
-   process.netxtTick() 把函数放到下一个事件循环中去执行
-   setImmediate() 生效是在接下来的迭代或者事件循环的下一次tick；  



