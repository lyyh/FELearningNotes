// 简单的节流函数
function throttle(fn, gapTime) {
	let lastTime = null;

	return function () {
		let nowTime = + new Date()
		if (nowTime - lastTime > gapTime || !lastTime) {
			fn();
			lastTime = nowTime
		}
	}
}

let fn = ()=>{
	console.log('boom')
}

setInterval(throttle(fn,1000),10)
