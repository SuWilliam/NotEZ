// Get user's selected text

var getSelectedText = function getSelectedText() {
    var txt = selection.toString();
    var anothertxt = 'hola';
    if (window.getSelection) {
        txt = window.getSelection();
    } else if (window.document.getSelection) {
        txt = document.getSelection();
    } else if (window.document.selection) {
        txt = document.selection.createRange().text;
    }
    alert(anothertxt.toString());
    return txt;
}

// Highlight user's selected text
var highlightSelection = function highlightSelection() {
    chrome.tabs.executeScript(null,
        {code:"alert(document.getSelection().toString());"})

    // var selectedText = getSelectedText();
    // var range = selectedText.getRangeAt(0);
    // var content = range.extractContents();
    // var span = document.createElement('SPAN');
    // span.appendChild(content);
    // var htmlHTML = span.innerHTML;
    // range.insertNode(span);
    // alert(htmlContent);
    // newNode.setAttributes("style", "background-color: yellow;")
    // range.surroundContents(newNode)
}

chrome.browserAction.onClicked.addListener(function() {
    alert("hi");
    chrome.tabs.executeScript(null,
        {code:"alert(document.getSelection().toString());"})
});
