
// add-event-listeners @ npm, like .addEventListener(), but add multiple listeners at one time.

//targetN: dom element or dom element id
//argArrayN: [type, listener, options/useCapture ... ], refer addEventListener()
module.exports = function (target1, argArray1 /* , argArray2, ... , target2, ... */) {
	var target, ai;
	for (var i = 0; i < arguments.length; i++) {
		ai = arguments[i];

		if (ai instanceof Array) {
			target.addEventListener.apply(target, ai);
		}
		else {
			target = (typeof ai === "string") ? document.getElementById(ai) : ai;
		}
	}
};
