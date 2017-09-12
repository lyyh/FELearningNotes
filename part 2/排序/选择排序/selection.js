// es6
let sourceArr = [5,2,5,3,1];
let swap = (v1,v2,context) => {
    [context[v1],context[v2]] = [context[v2],context[v1]];
}

let selection = arr => {
    let len = arr.length;
    // 用于保存最小值的索引
    let minIndex = 0; 

    for(let i = 0;i < len - 1;i++){
        minIndex = i;
        // 遍历后面的元素和当前认为的最小值进行比较
        for(let j = i + 1;j < len;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        // 若找到最小的值，便与之交换
        minIndex !== i && swap(minIndex,i,arr);
    }
}



