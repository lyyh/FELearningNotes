// es6
let sourceArr = [6, 2, 3, 4, 5];
let swap = (v1, v2, context) => {
    [context[v1], context[v2]] = [context[v2], context[v1]];
}

let bubble = arr => {
    let len = arr.length;
    let count = 0;
    // 比较趟数 len - 1 趟，最后一趟不用比较
    for (let i = 0; i < len - 1; i++) {
        count++;
        // 每趟比较次数 len - i -1
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr)
            }
        }
    }
    console.log('比较趟数',count);
    return arr;
}

// 优化方案，设一个flag，如果未发生元素交换则证明该序列有序
let betterBubble = arr => {
    let len = arr.length;
    let count = 0;
    // 比较趟数 len - 1 趟，最后一趟不用比较
    for (let i = 0; i < len - 1; i++) {
        count++;
        // 设置一个flag
        let flag = false;
        // 每趟比较次数 len - i -1
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr)
                flag = true;
            }
        }
        if(!flag){
            break;
        }
    }
    console.log('比较趟数',count);
    return arr;
}

betterBubble(sourceArr);
bubble(sourceArr);


