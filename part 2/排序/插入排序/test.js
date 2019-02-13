/**
 * Created by anserliu on 2019/2/13.
 */
var insertion = arr => {
	var len = arr.length
	for(var i = 1;i<len;i++){
		var current = arr[i]
		var preIndex = i-1
		while (preIndex>=0&&current<arr[preIndex]){
			arr[preIndex+1]=arr[preIndex]
			preIndex--
		}
		arr[preIndex+1] = current
	}
	return arr
}

console.log(insertion([4,2,1,4,5,2,4]))