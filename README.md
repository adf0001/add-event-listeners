# add-event-listeners
Like .addEventListener(), but add multiple listeners at one time.

# Install
```
npm install add-event-listeners
```

# Usage & Api
```javascript

var add_event_listeners = require("add-event-listeners");

//add_event_listeners(target1, argArray1 /* , argArray2, ... , target2, ... */)
//		targetN: dom element or dom element id
//		argArrayN: [type, listener, options/useCapture ... ], refer addEventListener()

document.getElementById('divResult3').innerHTML =
	"<span id='spClick' class='ht-cmd'>click to test</span> " +
	"<span id='spClick2' class='ht-cmd'>click to test 2</span>";

add_event_listeners(
	"spClick",
	["click", function () { alert("1") }],
	["click", function () { alert("2") }],
	"spClick2",
	["click", function () { alert("2-1") }],
);

```
