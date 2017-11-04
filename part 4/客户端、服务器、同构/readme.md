# 客户端、服务器、同构
-   客户端渲染：页面在 JavaScript，CSS 等资源文件加载完毕后开始渲染，路由为客户端路由，也就是我们经常谈到的 SPA（Single Page Application）。  
-   服务器端渲染：页面由服务端直接返回给浏览器，路由为服务端路由，URL 的变更会刷新页面，原理与 ASP，PHP 等传统后端框架类似。  
-   同构：即编写的 JavaScript 代码可同时运行于浏览器及 Node.js 两套环境中，用服务端渲染来提升首屏的加载速度，首屏之后的路由由客户端控制，即在用户到达首屏后，整个应用仍是一个 SPA。  

## 同构
不论是客户端渲染，还是服务端渲染，都有着其明显的缺陷，而同构显然是结合了二者优点之后的一种更好的解决方案。  

![](hhttps://github.com/lyyh/FELearningNotes/blob/master/public/images/part%201/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B8%B2%E6%9F%93/%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E6%9E%B6%E6%9E%84.jpg) 