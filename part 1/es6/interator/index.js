// 对象实现 iterator
var obj = { x: 1, y: 2, z: 3 };
obj[Symbol.iterator] = function() {
  
  // iterator 是一个具有 next 方法的对象，
  // 它的返回至少有一个对象
  // 两个属性：value＆done。

  // 返回一个 iterator 对象
  return {
    next: function() {
      if (this._countDown === 3) {
        const lastValue = this._countDown;
        return { value: this._countDown, done: true };
      }
      this._countDown = this._countDown + 1;
      return { value: this._countDown, done: false };
    },
    _countDown: 0
  };
};
console.log([...obj]); // 打印 [1, 2, 3]

// 利用 generator 函数定制对象的行为
var obj = {x:1, y:2, z: 3}
obj[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...obj]); // 打印 [1, 2, 3]

// https://juejin.im/post/5d2d146bf265da1b9163c5c9