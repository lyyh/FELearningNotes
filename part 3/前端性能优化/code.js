// 滚动条监听

// 简单的节流函数
function throttle(func, wait, mustRun) {
    var timeout,
        startTime = new Date();

    return function() {
        var context = this,
            args = arguments,
            curTime = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if(curTime - startTime >= mustRun){
            func.apply(context,args);
            startTime = curTime;
        // 没达到触发间隔，重新设定定时器
        }else{
            timeout = setTimeout(func, wait);
        }
    };
};

// 判断元素是否在可视范围内
function elementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight));
}

function lazyLoadImgs() {
    const count = 0;
      return function() {
          [].slice.call(images, count).forEach(image => {
              if(elementInViewport(elementInViewport(image))) {
                image.setAttribute('src', image.getAttribute('data-src'));
                  count++;
              }
          });
    }
}

const images = document.getElementByTagName('img');
// 采用了节流函数, 加载图片
window.addEventListener('scroll',throttle(lazyLoadImgs(images),500,1000));