### getter 和 setter
将某个属性包装成取值函数和存值函数，拦截改属性的存取行为

### getter
- 复制无效
- 在类 constructor 中设置属性，会报错，在外部不会
```
TypeError: Cannot set property name of #<A> which has only a getter
```
- getter 返回的是同一份引用
