# async 
async,它就是 Generator 函数的语法糖。async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await  

## 相对于generator的改进
1.内置执行器  
Generator 函数的执行必须靠执行器，自动执行需要依靠co模块，async函数自带执行器。  
2.更好的语义  
async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。  
3.更广的适用性  
co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。  
4.返回值是 Promise。  
async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。  


