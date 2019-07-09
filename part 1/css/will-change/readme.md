## will-change
告诉浏览器，该元素会有动画改变，需要使用GPU渲染加速
原理：把元素当做一个独立渲染层layer，启用GPU合成图层。
### 缺点
1. 非常消耗手机电量，所以尽量遵循最小化原则，配合伪类使用、或者在 mousedown 回调中使用


### 参考
https://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/