## transform 特性
1. 任何非none值的transform会导致创建一个堆栈上下文和包含块。
- 如果父级元素设置了transform属性，position:relative/absolute/fixed会基于此定位。
- fixed会绕过中间的absolute、relative，直接相对于 transform 的元素定位，同时直接降级变成 position: absolute。（该特性只有 chrome 和 FireFox 浏览器下才会有）

## transform改变overflow对absolute元素的限制
无论是overflow容器还是嵌套子元素，只要有transform属性，就会hidden溢出的absolute。

## transform限制absolute的100%宽度大小
元素设置100%，都会参照第一个非static值的position祖先元素计算