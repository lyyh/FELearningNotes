# restful 风格
-   设计哲学：将服务器端提供的内容实体看作一个资源，并表现在URL上。  
-   通过URL设计资源、请求方法、定义资源的操作，通过Accept决定资源的表现形式  

## 资源与方法
URL地址代表了一个资源，请求方法代表了对资源的操作   
过去的设计:  
```
POST /user/add?username=jacksontian
```
现在的设计:  
```
POST /user/jacksontian
```

## 后缀
对资源的格式要求上发生改变。过去是添加请求资源的后缀。在RESTful设计中，资源具体格式又请求头Accept字段和服务器支持的情况


