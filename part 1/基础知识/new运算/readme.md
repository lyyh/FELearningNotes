# new操作运算符
当代码 new Foo(...) 执行时：  
1.一个新对象被创建。它继承自Foo.prototype  
`foo.__proto__ === Foo.prototype`  
2.构造函数 Foo 被执行。执行的时候，相应的传参会被传入，同时this会被指定为这个新实例。  
3.如果构造函数返回了一个“对象”，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象。   
ps：一般情况下构造函数不返回任何值，不过用户如果想覆盖这个返回值，可以自己选择返回一个普通对象来覆盖。当然，返回数组也会覆盖，因为数组也是对象。    