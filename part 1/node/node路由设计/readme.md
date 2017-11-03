# 路由设计
## 对象属性
-   app: 中间件方法，将请求方法存储到路由
-   routes: 路由，存储请求路径与请求方法

## 方法
1. web server
2. pathExpRegResolver，对 pathExpReg 加一层封装处理，返回path正则与请求参数对应的key值
3. controller，解析客户端请求。提取出 request 中的 method 、 path，调用 dispatcher 分派请求方法
4. dispatcher，分派请求到action。通过path匹配出注册函数，从rest url中提取参数，调用注册函数
5. NotFoundHandler，处理404
