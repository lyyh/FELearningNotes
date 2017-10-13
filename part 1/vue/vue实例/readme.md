# vue实例
Vue的实例是Vue框架的入口，其实也就是前端的ViewModel，它包含了页面中的业务逻辑处理、数据模型等，当然它也有自己的一系列的生命周期的事件钩子，辅助我们进行对整个Vue实例生成、编译、挂着、销毁等过程进行js控制。  
## vue实例的data数据对象
数据绑定离不开data里面的数据，Vue框架会自动监视data里面的数据变化，自动更新数据到HTML标签上去。本质原理是：Vue会自动将data里面的数据进行递归抓换成getter和setter，然后就可以自动更新HTML标签了，当然用getter和setter所以老的浏览器Vue支持的不够好。  
-   data对象的类型：  
    -   类型是Object或者Function。  
    -   如果是组件对象中，data必须是Function类型。【后面学了组件后就明白了，暂时对组件先放放。】

```
// 创建普通的Vue实例
var vm = new Vue({
  data: data
})

// 组件定义【后面会详细讲的】
// Vue.extend() 中 data 必须是函数
var Component = Vue.extend({
  data: function () {   //这里必须是函数！！！！
    return { a: 1 }
  }
})
```  

## vue实例的computed
Vue的计算属性（computed)的属性会自动混入Vue的实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。这就很强大了，再计算属性中定义的函数里面可以直接使用指向了vue实例的this，  

## 计算属性和观察者
### 计算属性
计算属性是基于它们的依赖进行缓存的，前提是以来的是响应式数据，基础例子
```
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```
Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖于 vm.reversedMessage 的绑定也会更新。而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有连带影响 (side effect)，这使得它易于测试和推理。

### computed vs methods
Vue 确实提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：watch 属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch。  

计算属性是基于它的依赖缓存。计算属性只有在它的相关依赖发生改变时才会重新取值。这就意味着只要 message 没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
每当重新渲染的时候，method 调用总会执行函数。也就是说只要不是直接使用浏览器刷新页面，当我们改变数据、DOM操作等引起页面重新渲染时，
计算属性会直接使用缓存，不会重新执行函数。适合那些计算量很大且改变频率很低的属性；
如果使用methods，每次页面重新渲染时都会重新执行methods函数。  

### computed vs watch
computed:
```
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

```
watch:
```
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```
-   computed适用于对多数据变动进行监听，然后维护一个状态（返回一个状态）。   
-   watch适用于对一个数据监听，我们也可以通过这些变化去维护一个状态，但不适用于监听一个数据来进行复杂的逻辑操作。  

## methods
-   类型: { [key: string]: Function }  
methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。  

注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。  

## watch
- 类型: { [key: string]: string | Function | Object }   
 
一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。

## 设置el的详解
-   类型：string | HTMLElement    
提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标,也就是说Vue绑定数据到哪里去找。可以是CSS 选择器，也可以是一个 HTMLElement实例。    



