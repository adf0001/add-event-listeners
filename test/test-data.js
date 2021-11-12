// global, for html page
add_event_listeners = require("../add-event-listeners.js");

module.exports = {

	"add_event_listeners()": function (done) {
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

		return "ui test";
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
