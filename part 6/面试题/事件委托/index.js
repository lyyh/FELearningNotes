/**
 * Created by anserliu on 2019/2/27.
 */
function delegate (parentSelector,targetSelector,events,foo) {
	function triggerFun (evt) {
			var evt = evt || window.event
			var target = evt.target || evt.srcElement
			if(target.matches(targetSelector)){
				foo.call(target,evt)
			}
	}

	events.split('.').forEach(function (event) {
		[...document.querySelectorAll(parentSelector)].forEach(function ($P) {
			$P.addEventListener(event,triggerFun)
		})
	})
}