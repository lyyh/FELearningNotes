// es6
let sourceArr = [6,1,2,5,3];
let swap = (v1, v2, context) => {
  [context[v1], context[v2]] = [context[v2], context[v1]];
};

let bubble = arr => {
  let len = arr.length;
  let count = 0;
  // 比较趟数 len - 1 趟，最后一趟不用比较
  for (let i = 0; i < len - 1; i++) {
    // 每趟比较次数 len - i -1
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
    count++;
  }
  console.log("比较趟数", count);
  return arr;
};

// 优化方案，设一个exchange，如果未发生元素交换则证明该序列有序
let betterBubble = arr => {
  let len = arr.length;
  let count = 0;
  // 比较趟数 len - 1 趟，最后一趟不用比较
  for (let i = 0; i < len - 1; i++) {
    // 设置一个exchange
    let exchange = false;
    // 每趟比较次数 len - i -1
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        exchange = true;
      }
    }
    if (!exchange) {
      break;
    }
    count++;
  }
  console.log("比较趟数", count);
  return arr;
};

// 记录交换记录
let posBubble = arr => {
  let len = arr.length;
  let i = len - 1;
  let pos = 0;
  let count = 0;
  while (i > 0) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 记录最后一次交换数据的位置
        pos = j;
        swap(j, j + 1, arr);
      }
    }
    if (i == pos) {
      break;
    }
    i = pos;
    count++;
  }
  console.log("比较趟数", count);
  return arr;
};

// 正向反向同时排序+exchange标记
var bothBubble = arr => {
  var len = arr.length;
  var high = len - 1;
  var low = 0;
  var count = 0;
  var exchange = false;
  while (low < high) {
    for (var j = low; j < high; j++) {
      if (arr[j] > arr[j + 1]) {
        exchange = true;
        swap(j, j + 1, arr);
      }
    }
    if (!exchange) break;
    --high;
    for (var i = high; i > low; i--) {
      if (arr[i] < arr[i - 1]) {
        exchange = true;
        swap(i, i - 1, arr);
      }
    }
    if (!exchange) break;
    low++;
    count++;
    exchange = false;
  }
  console.log("比较趟数", count);
  return arr;
};
