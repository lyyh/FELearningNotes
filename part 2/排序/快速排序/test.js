/**
 * Created by anserliu on 2019/2/13.
 */
var source = [2,1,5,3,6,3,8,2,1]
var quick = arr => {
	var len = arr.length
	if(len < 1)return arr
	var pivotIndex = Math.floor(len/2)
	var pivot = arr[pivotIndex]
	var left = []
	var right = []
	for(var i = 0;i<len;i++){
		if(i==pivotIndex)continue
		if(arr[i]>pivot){
			right.push(arr[i])
		}else{
			left.push(arr[i])
		}
	}
	return quick(left).concat([pivot],quick(right))
}
console.log(quick(source))

