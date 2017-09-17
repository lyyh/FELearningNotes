# HTTP状态码
-   1XX 信息状态码 接收的请求正在被处理  
-   2XX 成功状态码 请求正常处理完毕  
-   3XX 重定向状态码 需要进行附加操作以完成请求  
-   4XX 客户端错误状态码 服务器无法处理请求  
-   5XX 服务器状态码 服务器处理请求出错  

## 2XX
-   200 OK  
    从客户端发过来的请求在服务器端被正常处理掉了   
    GET方法，对应请求资源的实体会作为响应返回  
    HEAD方法，在响应中只返回首部，不返回实体的主体部分  
-   204 No Content  
    请求已经成功处理，但是不返回任何实体的主体  
-   206 Partial Content  
    该状态码表示客户端进行了范围请求。响应中包含Content-Range指定范围的实体内容 

## 3XX
-   301 Moved Permanently   
    永久性重定向。禁止将POST改成GET方法
-   302 Found  
    临时性重定向。禁止将POST改成GET方法
-   303 See Other  
    由于请求对应的资源存在另一个URI，告诉客户端应采用GET方式获取资源   
-   304 Not Modified  
    状态码返回时，不包含任何响应的主体部分。使用未过期的缓存  
-   307 Temporary Redirect  
    临时性重定向。遵守标准，不会从POST变成GET  
## 4XX  
-   400 Bad Request
    无法理解的请求  
-   401 Unauthorized  
    需要认证  
-   403 Forbidden  
    未获取访问权限  
-   404 Not Found  
    无法找到请求的资源  

## 5XX  
-   500 Server Error  
    服务器请求错误  
-   503 Service Unavailable  
    服务器暂时处于超负载和正在进行停机维护   

    

