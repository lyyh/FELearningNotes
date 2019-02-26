// 函数防抖 保存变量的写法
function debounce(fn, wait) {
	var timer = null;
	return function () {
		var context = this
		var args = arguments
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(function () {
			fn.apply(context, args)
		}, wait)
	}
}

// 函数防抖 不保存定时器
function debounce1 (fn,wait) {
	return function (...arg) {
		let that = this
		clearTimeout(fn.timer)
		fn.timer = setTimeout(function () {
			fn.apply(that,arg)
		},wait)
	}
}

// 立即执行的防抖函数
function debounce2 (fn,wait,immediate=true) {
	let timer = null
	return function (...args) {
		let that = this
		let _args = args

		clearTimeout(timer)

		if(immediate){
			if(!timer)fn.apply(that,_args)
			timer = setTimeout(function () {
				timer = null
			},wait)
		}else{
			timer = null
			timer = setTimeout(function () {
				fn.apply(that,_args)
			},wait)
		}
	}
}

var fn = function () {
	console.log('boom')
}

// 需要立刻反馈的效果
setInterval(debounce2(fn,500,true),1000) // 第一次在1000ms后触发，之后每1000ms触发一次
// 不需要立刻反馈的效果
setInterval(debounce2(fn,500,false),1000) // 第一次在1500ms后触发，之后每1000ms触发一次

// setInterval(debounce1(fn,2000,false),1000) // 不会触发一次（我把函数防抖看出技能读条，如果读条没完成就用技能，便会失败而且重新读条）
