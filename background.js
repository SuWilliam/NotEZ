chrome.browserAction.onClicked.addListener(function(tab) {
	var txt = "";
	alert("hi");
	$("body").mouseup(function() {
	if (window.getSelection) {
		txt = window.getSelection();
	} else if (document.getSelection) {
		txt = window.getSelection();
	} else if (document.selection) {
		txt = document.selection.createRange().text;
	}
	alert(txt);
	})
});

