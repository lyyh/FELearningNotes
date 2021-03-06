# 红黑树
-   通过对任何一条从根到叶子的路径上各个结点着色方式的限制，红黑树确保没有一条路径会比其他路径长出俩倍，因而是接近平衡的。  
-   	红黑树虽然本质上是一棵二叉查找树，但它在二叉查找树的基础上增加了着色和相关的性质使得红黑树相对平衡，从而保证了红黑树的查找、插入、删除的时间复杂度最坏为O(log n)。  
## 应用
-   主要是用它来存储有序的数据，它的时间复杂度是O(lgn)，效率非常之高。  -
-   Linux中的线程调度就是使用的红黑树来管理进程控制块  
-   Nginx中也是使用红黑树来管理的timer  
-   Java中的TreeMap和TreeSet也是基于红黑树来实现的  
-   它的树高为~lgN，所以不管是查找/插入/删除操作它均能保证能够在对数时间之内完成  
## 红黑树的五个性质
1.  结点要么是红的要么是黑的  
2.  根节点是黑色  
3.  每个叶子节点都是黑色的（这里叶子节点，是指为空(NIL或NULL)的叶子节点！）  
4.  如果一个节点是红色，那么其子节点必然是黑色  
5.  从一个节点到该节点的子孙节点的所有路径上包含相同数目的黑节点。  

## 红黑树可以定义成含有红黑链接并且满足下列条件的二叉查找树：
1.红链接均为左链接。     
2.没有任何一个节点同时和两条红链接相连。   
3.任意空链接到根节点的路径上的黑链接数目相同。p.s: 我们将指向一棵空树的链接称为空链接。     

## 选择
-   左旋和右旋前后都是二叉查找树  
-   选择让树保持红黑树的特性  

### 左旋
-   被旋转的节点将变成一个左节点  

### 右旋
-   旋转的节点将变成一个右节点

## 添加
1.  将红黑树当作一颗二叉查找树，将节点插入。任何的旋转和重新着色操作，都不会改变它仍然是一颗二叉查找树的事实。  
2.  将插入的节点着色为"红色"。将插入的节点着色为红色，不会违背"特性(5)"。到可能会违背特性4  


