
// add-event-listeners @ npm, like .addEventListener(), but add multiple listeners at one time.

//argArrayN: [type, listener, options/useCapture ... ], refer addEventListener()
module.exports = function (target, argArray1 /* , argArray2, ... */) {
	for (var i = 1; i < arguments.length; i++) {
		target.addEventListener.apply(target, arguments[i]);
	}
};
