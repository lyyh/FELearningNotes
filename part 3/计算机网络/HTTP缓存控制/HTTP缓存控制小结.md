# HTTP缓存控制小结
## HTTP首部字段
1.  通用首部字段  
-   cache-control 控制缓存的行为  
-   pragma  http1.0，使用'no-cache'禁用缓存  
2. 请求首部字段  
-   If-Match 比较Etag是否一致  
-   If-None-Match 比较Etag是否不一致  
-   If-Modified-Since 比较资源最后更新的时间是否一致  
-   If-Unmodified-Since 比较资源最后更新的时间是否不一致  
3. 响应首部字段  
-   ETag 资源的匹配信息  
4. 实体首部字段  
-   Expires http1.0 实体过期时间  
-   Last-Modified 资源的最后一次修改时间  

## 优先级
Pragma > Cache-control > Expires 

## Cache-control
-   no-cache 告诉浏览器、缓存服务器，不管本地副本是否过期，使用资源副本前，一定要到源服务器进行副本有效性校验。  
-   no-store 请求和响应的信息都不应该被存储在对方的磁盘系统中；
## Cache-control 与 Expires  
-   Expires 响应报文中Expires所定义的缓存时间是相对服务器上的时间而言的，其定义的是资源“失效时刻”，如果客户端上的时间跟服务器上的时间不一致（特别是用户修改了自己电脑的系统时间），那缓存时间可能就没啥意义了。  
-   Cache-Control  

## 校验缓存字段  
-   200 from cache: 比如设置的缓存时间未过期，那么自然直接从本地缓存取数据  

### Last-Modified 
-   服务器将资源传递给客户端时，会将资源最后更改的时间以“Last-Modified: GMT”的形式加在实体首部上一起返回给客户端。客户端会为资源标记上该信息，下次再次请求时，会把该信息附带在请求报文中一并带给服务器去做检查，若传递的时间值与服务器上该资源最终修改时间是一致的，则说明该资源没有被修改过，直接返回304状态码
-   如果两个时间不一致，则服务器会发回该资源并返回200状态码  

#### If-Modified-Since
该请求首部告诉服务器如果客户端传来的最后修改时间与服务器上的一致，则直接回送304 和响应报头即可。  

#### If-Unmodified-Since  
该值告诉服务器，若Last-Modified没有匹配上（资源在服务端的最后更新时间改变了），则应当返回412(Precondition Failed) 状态码给客户端  

### Etag 
解决的问题：Last-Modified 存在一定问题，如果在服务器上，一个资源被修改了，但其实际内容根本没发生改变，会因为Last-Modified时间匹配不上而返回了整个实体给客户端（即使客户端缓存里有个一模一样的资源）。  

过程：客户端会保留该 ETag 字段，并在下一次请求时将其一并带过去给服务器。服务器只需要比较客户端传来的ETag跟自己服务器上该资源的ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了。  


结果：如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可。  

#### If-None-Match: ETag-value
示例为 If-None-Match: "5d8c72a5edda8d6a:3239" 告诉服务端如果 ETag 没匹配上需要重发资源数据，否则直接回送304 和响应报头即可  

#### If-Match: ETag-value  
告诉服务器如果没有匹配到ETag，或者收到了“*”值而当前并没有该资源实体，则应当返回412(Precondition Failed) 状态码给客户端。否则服务器直接忽略该字段。

## 缓存头部对比  
-   Expires ，如果服务器时间和客户端时间存在不一致，可能会出现问题。  
-   Cache-Control HTTP 1.1 产物，以时间间隔标识失效时间，解决了Expires服务器和客户端相对时间的问题。  
-   Last-Modified 服务器对比最后修改时间如果相同则返回304，不同返回200以及资源内容、只要资源修改，无论内容是否发生实质性的变化，都会将该资源返回客户端。无法识别一秒内进行多次修改的情况。  
-    ETag 可以更加精确的判断资源是否被修改，可以识别一秒内多次修改的情况。分布式服务器存储的情况下，计算ETag的算法如果不一样，会导致浏览器从一台服务器上获得页面内容后到另外一台服务器上进行验证时发现ETag不匹配的情况。  

## 缓存实践  
对于所有可缓存资源，指定一个Expires或Cache-Control max-age以及一个Last-Modified或ETag至关重要。同时使用前者和后者可以很好的相互适应。
前者不需要每次都发起一次请求来校验资源时效性，后者保证当资源未出现修改的时候不需要重新发送该资源  

## 结论
-   需要兼容HTTP1.0的时候需要使用Expires，不然可以考虑直接使用Cache-Control
-   需要处理一秒内多次修改的情况，或者其他Last-Modified处理不了的情况，才使用ETag，否则使用Last-Modified。
-   对于所有可缓存资源，需要指定一个Expires或Cache-Control，同时指定Last-Modified或者Etag。
-   可以通过标识文件版本名、加长缓存时间的方式来减少304响应。
-   Last-Moidfied用If-Modified-Since请求头来检验，ETag用if-None-Match请求头来检验  

## 参考资料
[http缓存控制小结](http://www.imweb.io/topic/5795dcb6fb312541492eda8c)

