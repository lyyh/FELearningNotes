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
    }
}
var heapInit = new Heap();
var ret = heapInit.build([3, 2, 1, 4]);
console.log(ret);
heapInit.delete();
console.log(heapInit.data);