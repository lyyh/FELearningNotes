# socket套接字是工作在协议中的哪一层呢
![](https://github.com/lyyh/FELearningNotes/blob/master/public/images/part%203/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/socket.png)  

-   socket套接字是只是一个接口。一般用在传输层和应用层之间，通过socket可以传输tcp，udp，ip协议的数据包。  
-   TCP和UDP之间留有空隙，表明网络直接绕过传输层直接使用IPv4和IPv6是有可能的，即原始套接字  
-   socket套接字编程接口是从网际协议的应用层进入传输层的接口  
-   socket（套接字）是通信的基石，是支持TCP/IP协议的网络通信的基本操作单元  
-   多个TCP连接或多个应用程序进程可能需要通过同一个TCP协议端口传输数据。为了区别不同的应用程序进程和连接，计算机操作系统为应用程序与TCP/IP协议交互提供了套接字(Socket)接口。应用层可以和传输层通过Socket接口，区分来自不同应用程序进程或网络连接的通信，实现数据传输的并发服务。  
-   Socket可以支持不同的传输层协议（TCP或UDP），当使用TCP协议进行连接时，该Socket连接就是一个TCP连接,UDP连接同理。  


