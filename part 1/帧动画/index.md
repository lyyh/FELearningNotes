## 帧动画的常见是吸纳方式
1. GIF
图片格式。理色彩简单、动效简单的动画，如 logo 、 icon 图这样的小图动画。gif图有一定的体积。
2. lotti
Airbnb 开源项目，通过解析 AE 动画为 json 数据，支持跨平台的动画效果解决方案。lottie
在设计师通过 AE 制作了动画之后，通过 AE 插件 bodymovin 将动画导出 json 给到我们前端开发，在使用这段 json 数据中，我们引入了 lottie-web 脚本来解析这段 json 数据渲染成为SVG / canvas 动画
3. APNG (Animated Portable Network Graphics)
基于 PNG 格式扩展的一种动画格式，增加了对动画图像的支持，其诞生是为了替代老旧的 GIF 格式，但部分浏览器不支持，需要考虑兼容；
4. createJs
适用于简单的位移动画、缩放动画
5. HTML video
设计给动画MP4视频

## links
https://juejin.im/post/5d513623e51d453b72147600