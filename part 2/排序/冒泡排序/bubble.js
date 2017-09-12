// es6
let sourceArr = [5, 2, 5, 3, 1];
let swap = (v1, v2, context) => {
    [context[v1], context[v2]] = [context[v2], context[v1]];
}

let bubble = arr => {
    let len = arr.length;
    // 比较趟数 len - 1 趟，最后一趟不用比较
    for (let i = 0; i < len - 1; i++) {
    // 每趟比较次数 len - i -1
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr)
            }
        }
    }
}

