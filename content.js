chrome.runtime.sendMessage({
	summary: window.getSelection().toString()
}, function(response) {
	console.log("hello")
});