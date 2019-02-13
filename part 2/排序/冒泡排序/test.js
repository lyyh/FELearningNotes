/**
 * Created by anserliu on 2019/2/13.
 */
let sourceArr = [6, 2, 4, 3, 5];
let swap = (v1, v2, context) => {
	[context[v1], context[v2]] = [context[v2], context[v1]];
}

var bubble = (arr) => {
	var len = arr.length
	var count = 0
	for(var i =0;i<len - 1;i++){
		count++
		for(var j =0;j<len-i-1;j++){
			if(arr[j]>arr[j+1]){
				swap(j,j+1,arr)
			}
		}
	}
	console.log(count)
	return arr
}
console.log(bubble(sourceArr))

var posBubble = arr => {
	var len = arr.length,
		i = len - 1,
		pos = len - 1,
		count = 0
	while(i>0){
		count++

		for(var j = 0;j<i;j++){
			if(arr[j]>arr[j+1]){
				swap(j,j+1,arr)
				pos = j
			}
		}
		if(pos==i)break;
		i=pos
	}
	console.log(count)
	return arr
}

console.log(posBubble(sourceArr))
