//es6
let insertion = arr => {
    let len = arr.length;
    let preIndex, current; // preIndex前一个元素的索引（哨兵）,current当前元素
    for (var i = 1; i < len - 1; i++) {
        current = arr[i];
        preIndex = i - 1;
        // 依次把当前元素和前面的元素进行比较
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        // 插入当前元素到合适的位置
        arr[preIndex + 1] = current;
    }
    return arr;
}

//二分查找插入位置
let binarySearch = (start, end, arr, data) => {
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        let middleData = arr[middle];
        if (middleData > data){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
    }
    return start;
}

let insertionBinary = arr => {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        if (arr[i] < arr[i - 1]) {
            let current = arr[i];
            let insertIndex = binarySearch(0, i, arr, arr[i]);
            for(let j = i -1 ;j >= insertIndex;j--){
                arr[j+1] = arr[j];
            }
            arr[insertIndex] = current;
        }
    }
    return arr;
}

// console.log(insertionBinary([2,3,1,1,4]));