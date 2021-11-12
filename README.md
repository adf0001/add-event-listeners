# add-event-listeners
Like .addEventListener(), but add multiple listeners at one time.

# Install
```
npm install add-event-listeners
```

# Usage & Api
```javascript

var add_event_listeners = require("add-event-listeners");

//argArrayN: [type, listener, options/useCapture ... ], refer addEventListener()
//add_event_listeners(target, argArray1 /* , argArray2, ... */)

document.getElementById('divResult3').innerHTML = "<span id='spClick' class='ht-cmd'>click to test</span>";

add_event_listeners(document.getElementById("spClick"),
	["click", function () { alert("1") }],
	["click", function () { alert("2") }],
);

```
