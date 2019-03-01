## new 操作的原理
我们知道new fn()操作执行时，一个新的对象会被创建，并且该对象继承自fn.prototype，然后fn会被执行，fn的this指向这个新对象（当然最后还有return的过程）
1. 对象创建
2. 对象继承 fn.prototype
3. 执行fn
4. fn中的 this 指向 新对象
5. return 