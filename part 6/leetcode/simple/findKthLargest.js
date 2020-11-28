// 在未排序的数组中找到第 k 个最大的元素
// 输入 [3,2,1,5,6,4]
// 输出 k = 2

var nums = [3,2,1,5,6,4];
var k = 2;
// 减分治之
function findKthLargest(nums,k){
    var left = 0;
    var right = nums.length - 1;

    var target = nums.length - k;
    var idx = partition(nums,left,right)
    while(true){
        var idx = partition(nums,left,right)
        if(idx === target){
            return nums[idx];
        }else if(idx < target){
            left = idx + 1;
        }else{
            right = idx - 1;
        }
    }
}

function partition(nums,left,right){
    var pivote = nums[left]
    var j = left
    // console.log(pivote)
    // console.log(j)
    for(var i = left + 1;i <= right;i++){
        // console.log('nums[i]',nums[i])
        // console.log('pivote',pivote)
        if(nums[i] < pivote){
            // console.log(i,j)
            j++
            // console.log('nums',nums)
            swap(nums,i,j);
        }
    }
    swap(nums,j,left)
    // console.log(nums)
    return j
}

function swap(nums,i,j) {
    console.log(`${i}和${j}交换`)
    var tmp = nums[i]
    nums[i] = nums[j]
    nums[j]= tmp
    console.log(nums)
}

console.log(findKthLargest(nums,k))

// swap(nums,0,4)
// console.log(nums)
