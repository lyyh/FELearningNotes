# proxy
-   proxy用于修改某些默认的行为
-   在目标对象之前设一层拦截，可以对外界的访问进行过滤和改写，被称为代理器

## 配合Reflect使用
-   在Proxy内部调用Reflect.set会调用setter  
-   Reflect 帮助在使用proxy的情况下，执行某些对象属性的默认行为  

## 实用场景
- 初始默认值
- 负值数组
- 
## links
[proxy一些技巧](https://juejin.im/post/5d2e657ae51d4510b71da69d)