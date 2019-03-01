/**
 * Created by anserliu on 2019/2/27.
 */
## 原理
bind 用于绑定 this 的指向，bind 方法会创建一个新函数，bind第一个参数会作为新函数运行的 this，其余的参数会在新函数后续被调用时位于其他参数之前传入，轻松实现curry
1. 返回新函数，调用新函数的返回值与调用旧函数的返回值相同
2. 新函数的this指向bind函数的第一个参数
3. bind其余参数会在新函数调用前位于其他实参前传入
4. 新函数也可以使用使用new操作符创建对象，构造函数为原函数，也就是说bind时指定的this会失效，但是可以传入的参数依然生效

## 实现
不考虑 new 操作符
```js
function bind (that) {
	const target = this
	const bindArgs = Array.prototype.slice.call(arguments,1)
	return function () {
		target.apply(that,[...bindArgs,...arguments])
	}
}

Function.prototype.bind = bind
function a () {
	console.log(this)
	if(!this.a)this.a = 1
	console.log([...arguments])
}

var obj = {b:1}
var fn = a.bind(obj,[1,2])
fn([3,4])
console.log(obj)
```
考虑new 操作符
```js
function bind (that) {
	const target = this
	const bindArgs = Array.prototype.slice.call(arguments,1)
	function bound() {
        if(this instanceof bound){
            target.apply(this,[...bindArgs,...arguments]) // 执行原构造器，this
        }else{
            target.apply(that,[...bindArgs,...arguments])    
        }
	}
    
    var Empty = function(){}
    Empty.prototype = target.prototype
    bound.prototype = new Empty()
	return bound
}

var fun = function(){
    this.a = 1
    console.log([...arguments])
}
fun.prototype.say = function(){
    console.log('say')
}
var BindFun = fun.bind(null,1)
var obj = new BindFun(2)
console.log(obj)

```

## Links
[bind的实现](https://github.com/shhdgit/blogs/issues/1)