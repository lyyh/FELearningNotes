# CORS
CORS 的请求分两种，这也是浏览器为了安全做的一些处理，不同情况下浏览器执行的操作也是不一样的，主要分为两种请求，当然这一切我们是不需要做额外处理的，浏览器会自动处理的。  
## 简单请求
### 条件
1. 请求方法是以下三种方法中的一个：  
HEAD、GET、POST
2. HTTP的头信息不超出以下几种字段：  
-   Accept
-   Accept-Language
-   Content-Language
-   Last-Event-ID
-   Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
### 流程
在头信息上加一个origin字段。本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。  

-   如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段（详见下文），就知道出错了，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。  
-   如果Origin指定的域名在许可范围内，服务器返回的响应
```
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```  
-   Access-Control-Allow-Origin 它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。  
-   Access-Control-Allow-Credentials 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。  
-   Access-Control-Expose-Headers 可以拿到6个基本字段Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma  

### withCredentials
- 需要服务器和客户端同时配合。一方面需要服务器指定Credentials: true。另一方面，需要在ajax中打开withCredentials。    
- 如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie。

## 非简单请求
### 预检请求  
-   请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。  
-   除了Origin字段，"预检"请求的头信息包括两个特殊字段。
    -   Access-Control-Request-Method  
        该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法  
    -   Access-Control-Request-Headers  
        该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段，上例是X-Custom-Header。  
-   如果浏览器否定了"预检"请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段  
-   服务器回应的CORS字段  
    -   Access-Control-Allow-Methods 该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。  
    -   Access-Control-Allow-Headers 它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。
    -   Access-Control-Max-Age 该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。  
    -   Access-Control-Allow-Credentials 该字段与简单请求时的含义相同。  
-   浏览器的正常响应  
    一旦服务器通过了"预检"请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样，会有一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。   



