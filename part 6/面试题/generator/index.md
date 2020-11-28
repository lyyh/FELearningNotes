### 特点
1.Generator可以理解为一个状态机，内部封装了很多状态，同时返回一个迭代器Iterator对象;
2.迭代器Iterator对象:定义标准方式产生一个有限或无限序列值,迭代器有next()对象;
3.多次返回可以被 next多次调用，最大特点是可以控制执行顺序;

## for...of
for...of会获取可迭代对象的'Symbol.iterator'，对该迭代器逐次调用next()，直到迭代器返回对象的done属性为true时，遍历结束，不对该value处理;