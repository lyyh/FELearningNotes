# async、await
async,它就是 Generator 函数的语法糖。async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await  
await,告诉浏览器不要马上执行下一行 js 语句，而是等待 async 函数返回的 promise 处理完毕再执行下一行语句。

## 相对于generator的改进
1.内置执行器  
Generator 函数的执行必须靠执行器，自动执行需要依靠co模块，async函数自带执行器。  
2.更好的语义  
async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。  
3.更广的适用性  
co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。  
4.返回值是 Promise。  
async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。  

## throw
-   generator 抛出的错误即可以被函数体内部捕获，也可以被函数体外部捕获  
-   generator throw 方法被捕获后会自动执行一次next  
-   这种函数内部错误捕获机制，大大方便了对错误的处理。多个yield表达式，可以只用一个try...catch代码块来捕获错误。如果使用回调函数的写法，想要捕获多个错误，就不得不为每个函数内部写一个错误处理语句，现在只在 Generator 函数内部写一次catch语句就可以了。  
-   一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。如果此后还调用next方法，将返回一个value属性等于undefined、done属性等于true的对象，即 JavaScript 引擎认为这个 Generator 已经运行结束了。  


## trycatch
内部使用的是 generator throw，所以可以使用 trycatch 来捕获错误


## 如果我们忘了使用 await 关键字会怎么样？
如果你在调用一个 async 函数时忘了使用 await 关键字，那个函数还是会开始执行。这意味着，await 关键字对于函数执行不是必需的。async 函数会返回一个 promise，你可以稍后使用这个 promise。
```
(async () => {
  const value = doSomeAsyncTask()
  console.log(value) // an unresolved promise
})()
```
另外一个后果是，编译器不会知道你想要等待这个函数完全执行完毕。因此，编译器会在完成异步任务之前就退出了程序。因此我们确实需要 await 关键字。