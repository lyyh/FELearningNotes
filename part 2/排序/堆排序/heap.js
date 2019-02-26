/**
 * Created by anserliu on 2019/2/14.
 */
// 交换两个元素
function swap(v1, v2, context) {
	[context[v1], context[v2]] = [context[v2], context[v1]];
	return void 0;
}
// 堆排序(最小堆)
function heap(arr) {
	let len = arr.length;
	// let findMax = function (arr,x,len) {
	// 	let l = 2 * x + 1;
	// 	let r = 2 * x + 2;
	// 	let largest = x;
	//
	// 	if (l < len && arr[l] > arr[largest]) {
	// 		largest = l;
	// 	}
	//
	// 	if (r < len && arr[r] > arr[largest]) {
	// 		largest = r;
	// 	}
	//
	// 	if (largest !== x) {
	// 		swap(x, largest, arr);
	// 	}
	// }

	let heapify = function (
		arr // 待排序的数组
		, x // 元素的下标
		, len // 数组的长度
	) {
		let l = 2 * x + 1;
		let r = 2 * x + 2;
		let largest = x;

		if (l < len && arr[l] > arr[largest]) {
			largest = l;
		}

		if (r < len && arr[r] > arr[largest]) {
			largest = r;
		}

		if (largest !== x) {
			swap(x, largest, arr);
			heapify(arr, largest, len);
		}
	}

	for (let i = Math.floor((len-2) / 2); i >= 0; i--) {
		heapify(arr, i, len);
	}
	// console.log('end')
	for (let i = len - 1; i >= 1; i--) {
		swap(0, i, arr);

		heapify(arr, 0, --len);
	}
	return arr;
}

console.log(heap([4,6,3,1,7,2,3,1,5]))