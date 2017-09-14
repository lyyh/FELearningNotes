// 非递归方式
let binarySearch = (arr, data) => {
    let len = arr.length;
    let low = 0;
    let high = len - 1;
    let middle;
    while (low <= high) {
        middle = parseInt((low + high) / 2);
        if (arr[middle] < data) {
            low = middle + 1;
        } else if (arr[middle] < data) {
            high = middle - 1;
        } else {
            return middle;
        }
    }
}

// 递归算法
let reBinarySearch = (arr, lowArg, highArg, data) => {
    let low = lowArg || 0;
    let high = highArg || arr.length - 1;
    if (low > high) {
        return -1;
    }
    let mid = parseInt((low + high) / 2);
    if (arr[mid] < data) {
        low = mid + 1;
        return reBinarySearch(arr, low, high, data);
    } else if (arr[mid] > data) {
        high = mid - 1;
        return reBinarySearch(arr, low, high, data);
    } else {
        return mid;
    }
}

// console.log(binarySearch([1, 2, 3, 5, 6], 5));
console.log(reBinarySearch([1, 2, 3, 5, 6], 0, 4, 5));