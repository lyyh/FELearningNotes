# socket套接字是工作在协议中的哪一层呢
![](https://github.com/lyyh/FELearningNotes/blob/master/public/images/part%203/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/socket.png)  

-   socket套接字是只是一个接口。一般用在传输层和应用层之间，通过socket可以传输tcp，udp，ip协议的数据包。  
-   TCP和UDP之间留有空隙，表明网络直接绕过传输层直接使用IPv4和IPv6是有可能的，即原始套接字
-   socket套接字编程接口是从网际协议的应用层进入传输层的接口


