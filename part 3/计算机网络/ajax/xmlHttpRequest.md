# XMLHttpRequest
-   属性  
    -   responseText 作为响应主题被返回的文本  
    -   responseXML 如果相响应的是text/html或者application/xml类型的话，这个属性将保存着响应的XML文档 
    -   status http响应状态码
    -   statusText http状态的说明
    -   readyState XMLHttpRequest对象的状态位 0 1 2 3 4 分别表示5种状态
    -   timeout 超时时间,IE8+，单位ms

-   事件
    -   onReadyStateChange 监听XMLHttpRequest对象的readyState属性的变化：
        -   0   请求未初始化
        -   1   服务器链接已经建立
        -   2   请求已被接收
        -   3	请求处理中
        -   4   请求已经完成，且响应已经就绪
    
-   如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
    -   open(method,url,async)规定请求的类型、URL 以及是否异步处理请求。
    -   send(string) 将请求发送到服务器。