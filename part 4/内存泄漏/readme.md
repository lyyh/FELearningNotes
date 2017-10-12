# 内存泄漏
在一些语言中，开发人员需要手动的使用原生语句来显示的分配和释放内存。但是在许多高级语言中，这些过程都会被自动的执行。在JavaScript中，变量（对象，字符串，等等）创建的时候为其分配内存，当不再被使用的时候会“自动地”释放这些内存，这个过程被称为垃圾回收。  

## 什么是内存泄漏
内存泄漏（Memory Leak）是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

## 内存声明周期
分配内存、使用内存、释放内存。  

## 引用计数垃圾回收  
这是最简单的垃圾回收算法。一个对象在没有被其他的引用指向的时候就被认为“可回收的”。  
但是无法避免循环引用造成的麻烦  

## 标记清除算法
1.从‘根’上生成一个列表（通常是以全局变量为根）。在JS中window对象可以作为一个'根'  
2.所有的'根'都被标记为活跃的，所有的子变量也被递归检查。能够从'根'上到达的都不会被认为成垃圾。  
3.没有被标记为活跃的就被认为成垃圾。这些内存就会被释放。  

## 四种常见的内存泄漏
### 意外的全局变量
1.为了防止这些问题发生，可以在你的JaveScript文件开头使用'use strict'；。这个可以使用一种严格的模式解析JavaScript来阻止意外的全局变量。    
2.如果有时全局变量被用于暂时储存大量的数据或者涉及到的信息，那么在使用完之后应该指定为null或者重新分配。  

### 被遗忘的定时器或者回调  
定时器可能会产生对不再需要的DOM节点或者数据的引用。  
```
var serverData = loadData();
setInterval(function() {
    var renderer = document.getElementById('renderer');
    if(renderer) {
        renderer.innerHTML = JSON.stringify(serverData);
    }
}, 5000); //每五秒会执行一次
```

1.renderer对象在将来有可能被移除，让interval没有存在的意义。然而当处理器interval仍然起作用时，renderer并不能被回收(interval在对象被移除时需要被停止),如果interval不能被回收，它的依赖也不可能被回收。这就意味着serverData，大概保存了大量的数据，也不可能被回收。     
2.如今，大部分的浏览器都能而且会在对象变得不可到达的时候回收观察处理器，甚至监听器没有被明确的移除掉。在对象被处理之前，最好也要显式地删除这些观察者。    
```
ar element = document.getElementById('launch-button');
var counter = 0;

function onClick(event) {
   counter++;
   element.innerHtml = 'text ' + counter;
}

element.addEventListener('click', onClick);
// 做一些其他的事情

element.removeEventListener('click', onClick);
element.parentNode.removeChild(element);
```

### 闭包
闭包是javascript开发的一个关键方面，一个内部函数使用了外部（封闭）函数的变量。由于JavaScript运行的细节，它可能以下面的方式造成内存泄漏：  
```
var theThing = null;

var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing) console.log('hi')  //引用了originalThing
  };

  theThing = {
    longStr: new Array(1000000).jojin('*'),
    someMethod: function (){
      console.log('message');  
    }
  };
};

setInterval(replaceThing,1000);
```
这些代码做了一件事情，每次relaceThing被调用，theThing获得一个包含大量数据和新的闭包(someMethod)的对象。同时，变量unused引用了originalThing（theThing是上一次函数被调用时产生的）。已经有点困惑了吧？最重要的事情是一旦为同一父域中的作用域产生闭包，则该作用域是共享的。

在这个案例中，someMethod和unused共享闭包作用域，unused引用了originalThing,这阻止了originalThing的回收，尽管unused不会被使用,但是someMethod依然可以通过theThing来访问replaceThing作用域外的变量（例如某些全局的）。  

### 来自dom的引用
在你要重复的操作DOM节点的时候，存储DOM节点是十分有用的。但是在你需要移除DOM节点的时候，需要确保移除DOM tree和代码中储存的引用。  
```
var element = {
  image: document.getElementById('image'),
  button: document.getElementById('button')
};

//Do some stuff

document.body.removeChild(document.getElementById('image'));
//这个时候  虽然从dom tree中移除了id为image的节点，但是还保留了一个对该节点的引用。于是image仍然不能被回收。
```

当涉及到DOM树内部或子节点时，需要考虑额外的考虑因素。例如，你在JavaScript中保持对某个表格的特定单元格的引用。有一天你决定从DOM中移除表格但是保留了对单元格的引用。你也许会认为除了单元格其他的都会被回收。实际并不是这样的：单元格是表格的一个子节点，子节点保持了对父节点的引用。确切的说，JS代码中对单元格的引用造成了整个表格被留在内存中了，所以在移除有被引用的节点时候要移除其子节点。

## 总结
1.小心使用全局变量，尽量不要使用全局变量来存储大量数据，如果是暂时使用，要在使用完成之后手动指定为null或者重新分配  
2.如果使用了定时器，在无用的时候要记得清除。如果为DOM节点绑定了事件监听器，在移除节点时要先注销事件监听器。  
3.小心闭包的使用。如果掌握不好，至少在使用大量数据的时候仔细考量。在使用递归的时候也要非常小心（例如用canvas做小游戏）。  
4.在移除DOM节点的时候要确保在代码中没有对节点的引用，这样才能完全的移除节点。在移除父节点之前要先移除子节点。  

### 参考资料
[javascript内存泄漏](https://juejin.im/post/59ca19ca6fb9a00a42477f55)




