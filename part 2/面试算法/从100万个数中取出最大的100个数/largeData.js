// 最大（最小）堆是一棵每一个节点的键值都不小于（大于）其孩子（如果存在）的键值的树
// 大顶堆是一棵完全二叉树，同时也是一棵最大树。小顶堆是一棵完全完全二叉树，同时也是一棵最小树。
function Heap() {
    this.data = [];
}
Heap.prototype = {
    // 创建
    build: function (datas) {
        // 初始化
        this.data = [];
        if (!datas instanceof Array) {
            return false;
        }
        // 入堆
        for (var i = 0; i < datas.length; i++) {
            this.insert(datas[i]);
        }
        return true;
    },
    // 插入
    insert: function (value) {
        if (!this.data instanceof Array) {
            this.data = [];
        }
        // 更新节点、更新顺序
        var heap = this.data;
        heap.push(value);
        var curIndex = heap.length - 1;
        var curFather = Math.floor((curIndex - 1) / 2);
        while (curFather >= 0) {
            if (heap[curFather] > heap[curIndex]) {
                var tmp = heap[curFather];
                heap[curFather] = heap[curIndex];
                heap[curIndex] = tmp;
            }
            curIndex = curFather;
            curFather = Math.floor((curIndex - 1) / 2);
        }
        return heap;
    },
    // 删除最大的节点
    delete: function () {
        var heap = this.data;
        if (!this.data instanceof Array) {
            return null;
        }
        var index = 0;
        var baseValue = heap[index];
        var maxIndex = heap.length - 1;
        var popValue = heap.pop();
        heap[index] = popValue;
        while (index < maxIndex) {
            var leftIndex = (index + 1) * 2 - 1;
            var rightIndex = (index + 1) * 2;
            var selectIndex = leftIndex;
            if (rightIndex < maxIndex) { 
                selectIndex = (this.data[leftIndex] > this.data[rightIndex]) ? rightIndex : leftIndex; 
            }  
            if (selectIndex < maxIndex && this.data[index] > this.data[selectIndex]) { 
                var temp = this.data[index]; 
                this.data[index] = this.data[selectIndex]; 
                this.data[selectIndex] = temp; 
            }  
            index = selectIndex; 
        }
        return baseValue;
    },
    replace: function(value){
        var heap = this.data;
        if (!this.data instanceof Array) {
            return null;
        }
        var index = 0;
        var maxIndex = heap.length - 1;
        heap[index] = value;
        while (index < maxIndex) {
            var leftIndex = (index + 1) * 2 - 1;
            var rightIndex = (index + 1) * 2;
            var selectIndex = leftIndex;
            if (rightIndex < maxIndex) { 
                selectIndex = (this.data[leftIndex] > this.data[rightIndex]) ? rightIndex : leftIndex; 
            }  
            if (selectIndex < maxIndex && this.data[index] > this.data[selectIndex]) { 
                var temp = this.data[index]; 
                this.data[index] = this.data[selectIndex]; 
                this.data[selectIndex] = temp; 
            }  
            index = selectIndex; 
        }
    },
    getMaxGroup: function(leftData){
        var heap = this.data;
        var context = this;
        leftData.forEach(function(el){
            context.replace(el);
        });
    },
    getData: function(){
        return this.data;
    }
}
function test() {
    // 构建海量数据
    var repo = [];
    for (var i = 0; i < 10000; i++) {
        repo.push(parseInt(Math.random()*10));
    }
    var initData = repo.slice(0,100);
    var leftData = repo.slice(100);
    var heap = new Heap();
    heap.build(initData);
    heap.getMaxGroup(leftData);
    console.log(heap.getData());
}
test();

