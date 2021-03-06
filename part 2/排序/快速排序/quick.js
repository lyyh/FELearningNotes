// 非就地排序（不改变原数组）
// 快速排序递归去实现，快速排序应该算是在冒泡排序基础上的递归分治法
let quick = arr => {
    let len = arr.length;
    // 检查数组元素长度，如果小于1，则返回
    if (len < 1) {
        return arr;
    }
    // 去中间值为基准
    let pivotIndex = Math.floor(len / 2);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];
    for (let i = 0; i < len; i++) {
        if (i == pivotIndex) {
            continue;
        }
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i]);
        }
    }
    return quick(left).concat([pivot], quick(right));
}
console.log(quick([2, 1, 3, 5, 2, 1, 6]));

//就地排序（改变原数组）
let localQuick = (arr, start, end) => {
    if (start < end) {
        let mid = divider(arr, start, end);
        localQuick(arr, start, mid - 1);
        localQuick(arr, mid + 1, end);
    }
    return arr;
}
let divider = (arr, start, end) => {
    let len = arr.length;
    if (len < 1) {
        return arr;
    }
    //基准值
    let pivot = arr[start];
    while (start < end) {
        while (start < end && arr[end] >= pivot) {
            end--;
        }
        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
        }
        while (start < end && arr[start] < pivot) {
            start++;
        }
        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            end--;
        }
    }
    arr[start] = pivot;
    return start;
}


console.log(localQuick([2, 1, 3, 6, 3, 2, 7, 4], 0, 7));

var quick_sort = function (nums, left, right) {
    if (left < right) {
        var start = left
        var end = right
        var pivot = nums[start]

        while (start < end) {
            while (start < end && nums[end] >= pivot) {
                end--
            }
            if (start < end) {
                nums[start++] = nums[end]
            }
            while (start < end && nums[start] < pivot) {
                start++
            }
            if (start < end) {
                nums[end--] = nums[start]
            }
        }

        nums[start] = pivot
        quick_sort(nums, start + 1, right)
        quick_sort(nums, left, start - 1)
    }
    return nums
}


var quick_sort = function (nums, left, right) {
    if (left < right) {
        var start = left,
            end = right
        var pivot = nums[start]
        while (start < end) {
            while (start < end && nums[end] >= pivot) {
                end--
            }
            if (start < end) {
                nums[start++] = nums[end]
            }
            while (start < end && nums[start] < pivot) {
                start++
            }
            if (start < end) {
                nums[end--] = nums[start]
            }
        }
        nums[start] = pivot
        quick_sort(nums, start + 1, right)
        quick_sort(nums, left,start - 1 )
    }
    return nums
}
console.log(quick_sort([2, 1, 3, 6, 3, 2, 7, 4], 0, 7))
// var partition = function (nums, left, right) {
//     // var mid = left + ((right - left) >> 1)
//     if (left < right) {
//         while (nums[left] < nums[mid]) {
//             left++
//         }
//         while (nums[right] > nums[mid]) {
//             right--
//         }
//         [nums[left], nums[right]] = [nums[right], nums[left]]
//     }
//     return mid
// }
// var localQuickNew = function (nums, left, right) {
//     if(left < right){
//         var mid = partition(nums, left, right)
//         localQuickNew(nums, left, mid - 1)
//         localQuick(num, mid + 1, right)
//     }
// }

// console.log(localQuick([2, 1, 3, 6, 3, 2, 7, 4], 0, 7));