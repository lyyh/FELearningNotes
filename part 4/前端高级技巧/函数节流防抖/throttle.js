// 简单的节流函数
// 时间戳方式（规定时间开始时触发）
function throttle(fn, delay) {
	let lastTime = 0;

	return function (...args) {
		let nowTime = + new Date()
		if (nowTime - lastTime > delay) {
			fn.apply(this,args);
			lastTime = nowTime
		}
	}
}

// 定时器方式（规定时间结束时触发）
function throttle1 (fn,delay) {
	let timer = null
	return function (...args) {
		let that = this
		if(!timer){
			timer = setTimeout(()=>{
				clearTimeout(timer)
				timer = null
				fn.apply(that,args)
			},delay)
		}
	}
}

//时间戳+定时器版: 实现第一次触发可以立即响应,结束触发后也能有响应 (该版才是最符合实际工作需求)
//该版主体思路还是时间戳版,定时器的作用仅仅是执行最后一次回调
function throttle2 (fn,delay) {
	let timer = null
	let previous = 0;
	return function (...args) {
		let that = this
		let now = Date.now()
		let remaining = delay - (now - previous)
		clearTimeout(timer)
		if(remaining<=0){
			// 立即执行
			fn.apply(that,args)
			previous = Date.now()
		}else{
			timer = setTimeout(()=>{
				fn.apply(that,args)
			},remaining)
		}
	}
}
let fn = ()=>{
	console.log('boom')
}
let fn1 = ()=>{
	console.log('boom1')
}
let fn2 = ()=>{
	console.log('boom2')
}

setInterval(throttle(fn,1000),10) // 开始时间执行
setInterval(throttle1(fn1,1000),10) // 结束时间执行
setInterval(throttle2(fn2,1000),10) // 第一次触发可以立即响应,结束触发后也能有响应