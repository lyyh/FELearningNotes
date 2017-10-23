function Observers(){
    this.events = [];
}
Observers.prototype = {
    getEvents:function(){
        return this.events;
    },
    addEvents:function(event){
        this.events.push(event);
    }
}
function EventLoop() {
    this.observers = [];
    this.currentTask = [];
}
EventLoop.prototype = {
    start: function(){
        console.log('start');
    },
    end: function(){
        console.log('end');
    },
    // 启动事件循环线程
    run: function () {
        var context = this;
        setImmediate(function () {
            context.start();
            while (true) {
                var isContiue = context._tick();
                if(!isContiue)return context.end();
            }
        });
    },
    // 循环事件队列，执行回调函数
    _tick: function () {
        var tasks = obs.getEvents();
        if(tasks.length == 0)return false;
        for(var i = 0;i < tasks.length;i++){
            tasks[i]();
        }
    }
}

var obs = new Observers();
var loop = new EventLoop();
function main(){
    loop.run();
    var fun;
    for(var i = 0;i < 10;i++){
        fun = function(){
            console.log('result is '+i);
        }
        obs.addEvents(fun);   
    }
}
main();
