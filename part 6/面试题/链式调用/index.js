// // 2.实现一个异步队列Queue，要求按时间依次执行callbacknew 
// new Queue().task(1000, function () {
//     console.log(1);
// }).task(2000, function () {
//     console.log(2);
// }).start()

class Queue {
    constructor(){
        this.queue = [];
    }
    task(timeout, callback) {
        this.queue.push({
            delay: timeout,
            fn: callback
        })
        return this;
    }
    start() {
        for(let {delay,fn} of this.queue){
            setTimeout(fn, delay);
        }
    }
}

new Queue().task(1000, function () {
    console.log('1s',1);
}).task(2000, function () {
    console.log('2s',2);
}).start()