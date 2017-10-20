# 错误处理
## 注册/触发
注册error事件的监听函数
```
withTime.on('error', (err) => {
  // 处理错误信息， 比如说打印出来
  console.log(err)
});

```
触发error事件
```
this.emit('error', err);
```

## 注册一个监听全局uncaughtException进程事件的函数  
处理error事件触发的异常的另一种方式是注册一个监听全局uncaughtException进程事件的函数，但这并不是个好主意。    
一般情况下，建议避免使用uncaughtException。但如果非用不可（比如打印日志或者清理工作之类的），必须在监听函数中退出进程。 
```
process.on('uncaughtException', (err) => { 
  // 还不够
  console.error(err); 

  // 还需要强制推出进程
  process.exit(1);
});

``` 

-   如果有多个错误事件同时触发，触发uncaughtException事件注册的监听函数，多次清理工作可能会造成问题。比如，当异常事件触发关闭数据库的动作时。    
-   EventEmitter模块暴露一个once方法，限制了事件触发的监听函数只能被调用一次。它很适用未捕获异常的情况，因为只要第一次异常发生，我们就会开始清理，然后退出进程。    
-   uncaughtException 无法对错误的请求提供友好的返回，只能用让它返回超时  



