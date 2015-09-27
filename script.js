var txt = "";
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


// var getSelectionText() = function getSelectionText() {
// 	var txt = "";
	
// 	return txt;
// }